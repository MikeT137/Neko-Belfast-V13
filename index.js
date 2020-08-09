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
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

bot.on('ready', () => {
    console.log('Belfast is online!');
    bot.user.setActivity('Use b!help for commands', {type: 'PLAYING'}).catch(console.error);
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

    
});

//Rock Paper Scissors
bot.on('message', message => {

    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'rps') {
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = acceptedReplies[Math.floor(Math.random() * acceptedReplies.length)];
        const result = acceptedReplies[random];
        const choice = args[0];

        if (!choice) return message.channel.send(`How to play: \`${prefix}rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        if (result === choice) return message.channel.send(`I played ${result}. It's a tie!`);
        
        switch (choice) {
            case 'rock': {
                if (result === 'paper') return message.channel.send(`I played ${result}. I won!`);
                else return message.channel.send(`I played ${result}. You won!`);
            }
            case 'paper': {
                if (result === 'scissors') return message.channel.send(`I played ${result}. I won!`);
                else return message.channel.send(`I played ${result}. You won!`);        
            }
            case 'scissors': {
                if (result === 'rock') return message.channel.send(`I played ${result}. I won!`);
                else return message.channel.send(`I played ${result}. You won!`);
            }
        }
    }
});

//Token
bot.login(process.env.token);
//bot.login(token);