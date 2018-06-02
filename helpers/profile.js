const 	User = require('../models/user');

exports.userProfile = (req, res) => {
	User.findById(req.params.id, (err, user) => {
		if(err){
			req.flash('error', 'Unable to find that user');
			return res.redirect('back');
		}
		res.render('profile', {user: user});
	})
}

exports.userBlinkers = (req, res) => {
	let category = req.params.category;

	User.findById(req.params.id,  (err, user) => {
		if(err){
			req.flash('error', err)
			return res.redirect('back')
		}
		user.blinker[category] = false;
		user.save(err => {
			return res.send('updated')
		});
	})
}

exports.adminUpdateUserProfile = (req, res) => {
	let updatedInfo = req.body.profile;

	User.findById(req.params.id, (err, foundUser) => {
		if(err){
			req.flash('error', err)
			return res.redirect('back')
		}

		if(foundUser.profile.progress !== updatedInfo.progress){
			foundUser.blinker.progress = true;
		}

		if(foundUser.profile.homework !== updatedInfo.homework){
			foundUser.blinker.homework = true;
		}

		if(foundUser.profile.nextLesson !== updatedInfo.nextLesson){
			foundUser.blinker.nextLesson = true;
		}

		if(foundUser.profile.evaluations !== updatedInfo.evaluations){
			foundUser.blinker.evaluations = true;
		}

		if(foundUser.profile.vaccinations !== updatedInfo.vaccinations){
			foundUser.blinker.vaccinations = true;
		}

		foundUser.profile = updatedInfo;
		foundUser.save(err => {
			req.flash('success', 'You have updated this profile');
			return res.redirect('back');
		})
	})
}


module.exports = exports;