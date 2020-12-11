const {Collection, Client} = require('discord.js');
const bot = new Client();


//Handlers
const fs = require('fs');

bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");

["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

//Discord Bot List - Server Count
const DBL = require("dblapi.js");
const topgglink = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyNzA5MzIzNjk1NDQzMTQ4OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjAxMDIxNzQ2fQ.QCfXPZhovBGFszhJAtrdBTChuh92-xrtGRoGiCJnYnU';
const dbl = new DBL(`${topgglink}`, bot);

dbl.on('posted', () => {
console.log('Server count posted!');
})

dbl.on('error', e => {
console.log(`Oops! ${e}`);
});

//Coin System
const coins = require('../../coins.json');

if(!coins[message.author.id]) {
    coins[message.author.id] = {
        coins: 0
    };
}
let coinAmount = Math.floor(Math.random() * 15) + 1;
let baseAmount = Math.floor(Math.random() * 15) + 1;

if(coinAmount === baseAmount) {
    coins[message.author.id] = {
        coins: coins[message.author.id].coins + coinAmount
    }
}
fs.writeFile("../../coins.json", JSON.stringify(coins))

//Token
bot.login(process.env.token);
//bot.login(token);