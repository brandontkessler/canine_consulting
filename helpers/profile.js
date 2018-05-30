const 	User = require('../models/user');

exports.userProfile = (req, res) => {
	User.findById(req.user.id, (err, user) => {
		if(err){
			console.log(err);
			req.flash('error', 'Unable to find that user');
			return res.redirect('back');
		}
		res.render('profile');
	})
}



module.exports = exports;