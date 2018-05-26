const 	User = require('../models/user'),
		mailer = require('./mailer');

// REGISTER
exports.getRegister = (req, res) => res.render('register');
exports.postRegister = (req, res) => {
	let newUser = new User({
		username: req.body.username
	});
	User.register(newUser, req.body.password, (err, user) => {
		if(err){
			console.log(err)
			return res.redirect('/register')
		}
		passport.authenticate('local')(req, res, function(){
			req.flash('success', 'You are now registered and logged in');
			res.redirect('/')
		})
	})
}

// LOGIN
exports.getLogin = (req, res) => res.render('login');
exports.postLogin = (req, res) => {
		req.flash('success', 'you are logged in');
		res.redirect('/')
}

// SIGNOUT
exports.signout = (req, res) => {
	req.logout();
	req.flash('success', 'You are now logged out')
	res.redirect('/');
}

// ENROLLMENT
exports.enrollmentSubmit = (req, res) => {
	let captchaResponse = 'g-recaptcha-response',
		captcha = req.body[captchaResponse],
		secretKey = process.env.SECRET_KEY,
		verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}&remoteip=${req.connection.remoteAddress}`,
		enrollment = req.body.enrollment,
		interestedClasses;

	if(captcha === undefined || captcha === '' || captcha === null){
		req.flash('error', `Prove you're a hooman, select the reCaptcha`)
		return res.redirect('back');
	}	

	request(verifyUrl, (err, response, body) => {
		body = JSON.parse(body);

		if(body.success !== undefined && !body.success){
			req.flash('error', 'Hooman verification failed.. Please try the reCaptcha again.')
			return res.redirect('back');
		}

		if(enrollment.behaviorClass === 'on' && enrollment.trainingClass === 'on'){
			interestedClasses = 'Behavior and Training';
		} else if(enrollment.behaviorClass === 'on') {
			interestedClasses = 'Behavior only';
		} else if(enrollment.trainingClass === 'on') {
			interestedClasses = 'Training only';
		} else {
			interestedClasses = 'Did not check Behavior or Training'
		}


		let enrollmentFormOptions = {
			to: 'paws.wendy@gmail.com',
			from: 'Canine Consulting DO NOT REPLY',
			subject: 'Enrollment Form Submission',
			text: `You have a message from ${enrollment.ownerName} regarding ${enrollment.dogName} who is a(n) ${enrollment.dogAge} year old ${enrollment.dogBreed}.
	They are interested in: ${interestedClasses}
	Here is your message: ${enrollment.msg}
	Contact ${enrollment.ownerName} at ${enrollment.contact}`
		}

		mailer.transporter.sendMail(enrollmentFormOptions, (error, info) => {
			if(error){
				console.log(error);
				return res.redirect('back')
			}
			req.flash('success', `Thank you hooman! Your message has been sent`)
			return res.redirect('back');
		});
	})
}

module.exports = exports;