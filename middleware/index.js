const 	User = require('../models/user');

exports.loginAuth = passport.authenticate('local', 
	{
		failureRedirect: '/login',
		failureFlash: true
	});

exports.isLoggedIn = function(req, res, next){
	let error = () => {
		req.flash('error', 'You must be logged in to do that'); 
		res.redirect("/login");
	}
	return (req.isAuthenticated() ? next() : error());
}

module.exports = exports;