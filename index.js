const {Collection, Client, Discord} = require('discord.js');
const bot = new Client();
const config = require('./config.json');
bot.prefix = 'my prefix';
const prefix = config.prefix;
const token = config.token;
const fs = require('fs');

//Command & Event Handler
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");
["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

//Token
bot.login(process.env.token);
//bot.login(token);