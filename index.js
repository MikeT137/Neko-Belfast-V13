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
    if(message.content == 'hey' || message.content == 'Hey' || message.content == 'HEY')
         message.channel.send('hewwo');
});

bot.on('message', (message) => {
    if(message.content == 'uwu' || message.content == 'UwU' || message.content == 'UWU' || message.content == 'owo' || message.content == 'OwO' || message.content == 'OWO')
         message.channel.send('>w<');
});

bot.on('message', message => {
	const withoutPrefix = message.content.slice(PREFIX.length);
	const split = withoutPrefix.split(/ +/);
	const command = split[0];
	const args = split.slice(1);
    let argument = message.content.substring(PREFIX.length).split(" ");

     if (message.content.startsWith(PREFIX)) {
        switch(argument[0]) {
            case 'mooni':
                bot.commands.get('mooni').execute(message, argument);
            break;

            case 'help':
                bot.commands.get('help').execute(message, argument);
            break;

            case 'info':
                bot.commands.get('info').execute(message, argument);
            break;
                    
            case 'mute':
                bot.commands.get('mute').execute(message, argument);
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
                    
            case 'handhold':
                bot.commands.get('handhold').execute(message, argument);
            break;

            case 'poke':
                bot.commands.get('poke').execute(message, argument);
            break;

            case 'lick':
                bot.commands.get('lick').execute(message, argument);
            break;

            case 'punch':
                bot.commands.get('punch').execute(message, argument);
            break;

            case 'slap':
                bot.commands.get('slap').execute(message, argument);
            break;

            case 'cry':
                bot.commands.get('cry').execute(message, argument);
            break;

            case 'smile':
                bot.commands.get('smile').execute(message, argument);
            break;

            case 'smug':
                bot.commands.get('smug').execute(message, argument);
            break;

            case 'laugh':
                bot.commands.get('laugh').execute(message, argument);
            break;

            case 'kick':
                bot.commands.get('kick').execute(message, argument);
            break;

            case 'ban':
                bot.commands.get('ban').execute(message, argument);
            break;

            case 'unmute':
                bot.commands.get('unmute').execute(message, argument);
            break;

            case 'dance':
                bot.commands.get('dance').execute(message, argument);
            break;

            case 'clap':
                bot.commands.get('clap').execute(message, argument);
            break;

            case 'pout':
                bot.commands.get('pout').execute(message, argument);
            break;

            case 'highfive':
                bot.commands.get('highfive').execute(message, argument);
            break;

            case 'blush':
                bot.commands.get('blush').execute(message, argument);
            break;
        }
    }
});

bot.login(process.env.token);