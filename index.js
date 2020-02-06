const SlackBot = require('slackbots');
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const bot = new SlackBot ({
	token: `${process.env.BOT_TOKEN}`,
	name: 'hibot'
})

// Start handler
bot.on('start', () => {
	const params = {
		icon_emoji: ':wave:'
	}

	bot.postMesageToUser(
		'Will',
		'We live in a society',
		params
	);
})

// Error handler
bot.on('error', (err) => {
	console.log(err);
})

// Message handler
bot.on('message', (data) => {
	if(data.type !== 'message') {
		return;
	}
	handleMessage(data.text);
})

// Response handler
function handleMessage(message) {
	if(message.includes('hi')) {
		rethinkThis()
	} else if(message.includes('Hi')) {
		rethinkThis()
	}
}

// rethinkThis
function rethinkThis() {
	bot.postMessageToUser(
		'Will', 
		'Rethink this...',
		params
		);
}












