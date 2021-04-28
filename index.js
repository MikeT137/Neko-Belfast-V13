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
});

//Discord Bot List - Server Count
const DBL = require("dblapi.js")
const topgglink = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyNzA5MzIzNjk1NDQzMTQ4OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjAxMDIxNzQ2fQ.QCfXPZhovBGFszhJAtrdBTChuh92-xrtGRoGiCJnYnU';
const dbl = new DBL(`${topgglink}`, bot);

dbl.on('posted', () => {
    console.log('Server count posted!')
});

dbl.on('error', e => {
    console.log(`Oops! ${e}`)
});

//Token
bot.login(process.env.token);