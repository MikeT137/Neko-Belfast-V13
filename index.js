const {Collection, Client, Discord} = require('discord.js');
const bot = new Client();
bot.prefix = 'my prefix';
const config = require('./config.json');
const prefix = config.prefix;
const token = config.token;
const fs = require('fs');

//Command Handler
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

bot.on('ready', () => {
    console.log('Belfast is online!');
    bot.user.setActivity('use b!help for commands', {type: 'PLAYING'}).catch(console.error);
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