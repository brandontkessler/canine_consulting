const	User = require('../models/user');

exports.getAdminPage = (req, res) => res.render('admin');
exports.postAdminLogin = (req, res) => {
	req.flash('success', 'Logged in as Admin');
	res.redirect(`/admin/portal`);
}

exports.getAdminRegisterPage = (req, res) => res.render('admin/register');
exports.postAdminRegister = (req, res) => {
	let adminBody = req.body.admin;
	let newAdmin = new User({
		username: adminBody.username,
		isAdmin: true
	})

	if(adminBody.password.length < 6){
		req.flash('error', 'Password must be 6 characters!');
		return res.redirect('back');
	}

	if(adminBody.password !== adminBody.confirmPassword){
		req.flash('error', 'Passwords do not match!');
		return res.redirect('back');
	}

	if(adminBody.adminCode !== process.env.ADMIN_CODE){
		req.flash('error', 'Incorrect admin code!');
		return res.redirect('back');
	}

	User.register(newAdmin, adminBody.password, (err, admin) => {
		if(err){
			req.flash('error', err);
			return res.redirect('back')
		}
		passport.authenticate('local-admin')(req, res, function(){
			req.flash('success', 'You are now registered and logged in as an admin');
			res.redirect('/admin/portal')
		})
	})
}

exports.getAdminPortal = (req, res) => {
	User.find({ isAdmin: false })
		.exec((err, users) => {
			res.render('admin/portal', {users: users})
		})
}

module.exports = exports;