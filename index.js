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
bot.snipes = new Collection();
bot.categories = fs.readdirSync("./commands/");
["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

//Welcome Command
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'welcome' || channel.name === 'Welcome' || channel.name === 'welcome-goodbye' || channel.name === 'Welcome-Goodbye' || channel.name === '👋┊welcome-goodbye' || channel.name === '👋┊Welcome-Goodbye')

    channel.send(`Welcome ${member} to the server! Before doing anything, please read the rules of the server and...enjoy your stay ;3`)
})

//Leaving Command
bot.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'welcome' || channel.name === 'Welcome' || channel.name === 'welcome-goodbye' || channel.name === 'Welcome-Goodbye' || channel.name === '👋┊welcome-goodbye' || channel.name === '👋┊Welcome-Goodbye')

    channel.send(`${member} left the server, oof`)
})

//Hello command
bot.on('message', (message) => {
    if(message.content == 'hey' || message.content == 'Hey' || message.content == 'HEY')
        message.channel.send('hewwo');
});

//UwU command
bot.on('message', (message) => {
    if(message.content == 'uwu' || message.content == 'UwU' || message.content == 'UWU' || message.content == 'owo' || message.content == 'OwO' || message.content == 'OWO')
        message.channel.send('>w<');
});

//Token
bot.login(process.env.token);
//bot.login(token);