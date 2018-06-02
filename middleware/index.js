const 	User = require('../models/user');

exports.loginAuth = passport.authenticate('local', {
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

exports.isProfileOwner = function(req, res, next){
	let error = () => {
		req.flash('error', `That's not your profile!`); 
		res.redirect("back");
	}
	if(req.user._id.toString() === req.params.id || req.user.isAdmin){
		return next();
	}
	error();
}

exports.isAdmin = function(req, res, next){
	let error = () => {
		res.status(403).send('Forbidden path');
	}
	return ((req.user.isAdmin === true) ? next() : error())
}

module.exports = exports;