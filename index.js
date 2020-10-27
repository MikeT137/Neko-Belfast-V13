const {Collection, Client, Discord} = require('discord.js');
const bot = new Client();
const config = require('./config.json');
bot.prefix = 'my prefix';
const prefix = ['b.', 'B.']
const token = config.token;
const fs = require('fs');

//Command Handler
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

//Ready command + custom status(server counting)
bot.on('ready', () => {
    console.log('Belfast is online!');
    setInterval(function(){
        bot.user.setActivity(`${bot.guilds.cache.size} servers | use b.help for commands`, {type: 'WATCHING'}).catch(console.error);
    }, 10000)
});

//Top.gg (site) server count
const DBL = require("dblapi.js");
const topgglink = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyNzA5MzIzNjk1NDQzMTQ4OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjAxMDIxNzQ2fQ.QCfXPZhovBGFszhJAtrdBTChuh92-xrtGRoGiCJnYnU';
const dbl = new DBL(`${topgglink}`, bot);

dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
});

//Commands
bot.on('message', async message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.forEach(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift();
    const command = bot.commands.get(cmd);

    if(cmd.length == 0) return;
    if(!command) command = bot.commands.get(bot.aliases.get(cmd));
    if(command) command.run(bot, message, args);
    
});

//Token
bot.login(process.env.token);
//bot.login(token);