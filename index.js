const {Collection, Client, Discord} = require('discord.js');
const bot = new Client();
const config = require('./config.json');
const fs = require('fs');

//Handlers
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");
["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

//Token
bot.login(process.env.token);
//bot.login(token);