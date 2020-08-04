const {Collection, Client, Discord} = require('discord.js');
const bot = new Client();
const config = require('./config.json');
bot.prefix = 'my prefix';
const prefix = config.prefix;
const token = config.token;
const fs = require('fs');

//Command Handler
bot.commands = new Collection();
bot.aliases = new Collection();
bot.snipes = new Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

bot.on('ready', () => {
    require('./events/client/ready')(bot);
});

//Hello Command
bot.on('hey', message => {
    require('./events/client/hey')(message);
});

//UwU command
bot.on('uwu', message => {
    require('./events/client/uwu')(message)
});

//Welcome Command
bot.on('welcome', member => {
    require('./events/guild/welcome')(member);
})

//Leaving Command
bot.on('leave', member => {
    require('./events/guild/leave')(member);
})

//Commands
bot.on('message', async (bot, message) => {
    require('./events/guild/message')(bot, message);
});

//Token
bot.login(process.env.token);
//bot.login(token);