const {Collection, Client} = require('discord.js');
const bot = new Client({ 
    disableMentions: "everyone",
    restTimeOffset: 0
});

//Handlers
const fs = require('fs');

bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");

["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(bot)
})

//Discord Bot List - Server Count
const DBL = require("dblapi.js")
const {topggtoken} = require('./config.json');
const dbl = new DBL(`${topggtoken}`, bot);

dbl.on('posted', () => {
    console.log('Server count posted!')
});

dbl.on('error', e => {
    console.log(`Oops! ${e}`)
});

//Token
bot.login(process.env.token);