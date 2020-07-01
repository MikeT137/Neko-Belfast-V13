const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = 'b!';

const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log('Belfast is online!');
});

bot.on('message', (message) => {
    if(message.content == 'hey')
         message.channel.send('hewwo');
});

bot.on('message', (message) => {
    if(message.content == 'uwu')
         message.channel.send('>w<');
    else if(message.content == 'UwU')
        message.channel.send('>w<');
});

bot.on('message', message => {
	if (!message.content.startsWith(PREFIX)) return;

	const withoutPrefix = message.content.slice(PREFIX.length);
	const split = withoutPrefix.split(/ +/);
	const command = split[0];
	const args = split.slice(1);
});

bot.on('message', (message) => {
    let argument = message.content.substring(PREFIX.length).split(" ");

    switch(argument[0]){
        case 'help':
            bot.commands.get('help').execute(message, argument);
        break;

        case 'info':
            bot.commands.get('info').execute(message, argument);
        break;
        
        case 'mute':
            bot.commands.get('mute').execute(message, argument);
        break;

        case 'love':
            bot.commands.get('love').execute(message, argument);
        break;

        case 'clear':
            bot.commands.get('clear').execute(message, argument);
        break;
        
        case 'avatar':
            bot.commands.get('avatar').execute(message, argument);
        break;

        case 'pat':
            if(!argument[2])
                message.channel.send('https://i.imgur.com/2lacG7l.gif');
        break;

        case 'hug':
            if(!argument[2])
                message.channel.send('https://tenor.com/view/anime-hug-sweet-love-gif-14246498');
        break;

        case 'snuggle':
            if(!argument[2])
                message.channel.send('https://media.tenor.com/images/5829c20ecce80dedec8a42537d32292e/tenor.gif');
        break;

        case 'kiss':
            if(!argument[2])
                message.channel.send('https://data.whicdn.com/images/10377184/original.gif');
        break;
    }
});

bot.login(process.env.token);