const 	User = require('../models/user');

exports.loginAuth = passport.authenticate('local', 
	{
		failureRedirect: '/login',
		failureFlash: true
	});



module.exports = exports;