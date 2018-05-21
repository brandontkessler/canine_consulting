const 	express = require('express');
		app = express(),
		PORT = process.env.PORT || 3000,
		mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost/k9';
		bodyParser = require('body-parser'),
		request = require('request'),
		mongoose = require('mongoose'),
		passport = require('passport'),
		expressSession = require('express-session'),
		flash = require('connect-flash'),
		nodemailer = require('nodemailer'),
		LocalStrategy = require('passport-local'),
		User = require('./models/user');

require('dotenv').config();

// REQUIRED ROUTES
const 	indexRoutes = require('./routes/index');

// APP SETUP
mongoose.connect(mongoUrl);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(flash());

// PASSPORT CONFIG
app.use(expressSession(
	{
		secret: process.env.SECRET_HASH,
		resave: false,
		saveUninitialized: false
	}
));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// PASSED TO ALL ROUTES
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// ROUTES
app.use(indexRoutes);

app.get('*', (req, res) => res.status(404).render('404'));


// SERVER
app.listen(PORT, _ => console.log(`Canine server is running on port ${PORT}`));

