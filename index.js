const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = 'b!';
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

['command'].forEach(handler => {
    require(`./commands/${handler}`)(bot);
})

bot.on('ready', () => {
    console.log('Belfast is online!');
    bot.user.setActivity('b!help', {type: 'PLAYING'}).catch(console.error);
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'welcome' || channel.name === 'Welcome' || channel.name === 'welcome-goodbye' || channel.name === 'Welcome-Goodbye' || channel.name === '👋┊welcome-goodbye' || channel.name === '👋┊Welcome-Goodbye')

    channel.send(`Welcome ${member} to the server! Before doing anything, please read the rules of the server and...enjoy your stay ;3`)
})
bot.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'welcome' || channel.name === 'Welcome' || channel.name === 'welcome-goodbye' || channel.name === 'Welcome-Goodbye' || channel.name === '👋┊welcome-goodbye' || channel.name === '👋┊Welcome-Goodbye')

    channel.send(`${member} left the server, oof`)
})

bot.on('message', (message) => {
    if(message.content == 'hey' || message.content == 'Hey' || message.content == 'HEY')
        message.channel.send('hewwo');
});

bot.on('message', (message) => {
    if(message.content == 'uwu' || message.content == 'UwU' || message.content == 'UWU' || message.content == 'owo' || message.content == 'OwO' || message.content == 'OWO')
        message.channel.send('>w<');
});

bot.on('message', async message => {
    let argument = message.content.slice(PREFIX.length).split(/ +/g);
    const cmd = argument.shift().toLowerCase();
    let command = bot.commands.get(cmd);

    if(command)
        command.run(bot, message, argument);
});

bot.login(process.env.token);