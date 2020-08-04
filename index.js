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

bot.on('message', async (bot, message) => {
    require('./events/guild/message')(bot, message);
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
bot.on('message', async message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.forEach(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const command = bot.commands.get(cmd);

    if(cmd.length == 0) return;
    if(!command) command = bot.commands.get(bot.aliases.get(cmd));
    if(command) command.run(bot, message, args);
})

//Token
bot.login(process.env.token);
//bot.login(token);