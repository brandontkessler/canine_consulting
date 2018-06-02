const 	express = require('express'),
		router = express.Router(),
		passport = require('passport'),
		helpers = require('../helpers'),
		adminHelpers = require('../helpers/admin'),
		profileHelpers = require('../helpers/profile'),
		middleware = require('../middleware'),
		User = require('../models/user');

router.get('/', (req, res) => res.render('home'));

// REGISTER
router.route('/register')
	.get(helpers.getRegister)
	.post(helpers.postRegister)

// LOGIN
router.route('/login')
	.get(helpers.getLogin)
	.post(middleware.loginAuth, helpers.postLogin)

// SIGNOUT
router.get('/signout', helpers.signout)

// NAVPAGES
router.get('/team', (req, res) => res.render('navPages/team'));
router.get('/method', (req, res) => res.render('navPages/method'));
router.get('/classes', (req, res) => res.render('navPages/classes'));
router.get('/schedule', (req, res) => res.render('navPages/schedule'));

// CLASSES CONTACT
router.route('/trainer_contact')
	.post(helpers.classesContactSubmit)

// PROFILE
router.route('/profile/:id')
	.get(middleware.isLoggedIn, middleware.isProfileOwner, profileHelpers.userProfile)
	.put(middleware.isLoggedIn, middleware.isAdmin, profileHelpers.adminUpdateUserProfile)

// BLINKER HANDLING
router.route('/profile/:id/:category').post(profileHelpers.userBlinkers);

// ADMIN
router.route('/admin')
	.get(adminHelpers.getAdminPage)
	.post(middleware.loginAuth, middleware.isAdmin, adminHelpers.postAdminLogin)

router.route('/admin/register')
	.get(adminHelpers.getAdminRegisterPage)
	.post(adminHelpers.postAdminRegister)

router.get('/admin/portal', middleware.isLoggedIn, middleware.isAdmin, adminHelpers.getAdminPortal)

module.exports = router;
