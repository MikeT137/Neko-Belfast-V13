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
    if(message.content == 'uwu') || if(message.content == 'UwU')
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
            bot.commands.get('pat').execute(message, argument);
        break;

        case 'hug':
            bot.commands.get('hug').execute(message, argument);
        break;

        case 'snuggle':
            bot.commands.get('snuggle').execute(message, argument);
        break;

        case 'kiss':
            bot.commands.get('kiss').execute(message, argument);
        break;
    }
});

bot.login(process.env.token);