const 	mongoose = require('mongoose'),
		passportLocalMongoose = require('passport-local-mongoose');

let UserSchema = new mongoose.Schema({
	username: String,
	dogName: String,
	dogAge: Number,
	package: String,
	password: String,
	isAdmin: Boolean,
	profile: {
		progress: String,
		homework: String,
		nextLesson: String,
		evaluations: String,
		vaccinations: String
	},
	blinker: {
		progress: Boolean,
		homework: Boolean,
		nextLesson: Boolean,
		evaluations: Boolean,
		vaccinations: Boolean
	}
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);