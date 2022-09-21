const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox6d0c902d6e68499da433eced2355bd23.mailgun.org';
const api_key=process.env.MAIL_GUN_API_KEY
const mg = mailgun({apiKey: api_key, domain: DOMAIN});


const sendWelcomeEmail = (email, name) => {
	const data = {
		from: 'sajidhussain1375@gmail.com',
		to:email,
		subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
	};
	mg.messages().send(data, function (error, body) {
		console.log(body);
	});

}


const sendCancelationEmail = (email, name) => {
	const data = {
		from: 'sajidhussain1375@gmail.com',
		to:email,
		subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
	};
	mg.messages().send(data, function (error, body) {
		console.log(body);
	});
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
