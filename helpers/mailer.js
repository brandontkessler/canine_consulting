

exports.transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: 'paws.wendy@gmail.com',
		pass: process.env.GMAIL_PASSWORD
	}
})

module.exports = exports;