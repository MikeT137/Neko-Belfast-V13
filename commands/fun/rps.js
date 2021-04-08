const {prefix} = require('../../config.json')
module.exports = {
    name: 'rps',
    description: 'It\'s just a command that lets you play rock paper scissors with the bot',
    usage: `${prefix}rps (rock/paper/scissors)`,
    category: 'fun',
    run: async (bot, message, args) => {
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const result = acceptedReplies[Math.floor(Math.random() * acceptedReplies.length)];

        if (!args[0]) {
            message.channel.send(`You have to \"choose your weapon\": \`${acceptedReplies.join(', ')}\``);
        }else if (!acceptedReplies.includes(args[0])) {
            message.channel.send(`You can only use: \`${acceptedReplies.join(', ')}\``);
        }
        switch (args[0]) {
            case 'rock':
                if (result === 'paper') {
                    message.channel.send(`I played ${result}. I won!`);
                }else if (result === args[0]) {
                    message.channel.send(`I played ${result}. It's a tie!`);
                }else {
                    message.channel.send(`I played ${result}. You won!`);
                }
            break;
            
            case 'paper':
                if (result === 'scissors') {
                    message.channel.send(`I played ${result}. I won!`);
                }else if (result === args[0]) {
                    message.channel.send(`I played ${result}. It's a tie!`);
                }else {
                    message.channel.send(`I played ${result}. You won!`);  
                }      
            break;

            case 'scissors':
                if (result === 'rock') {
                    message.channel.send(`I played ${result}. I won!`);
                }else if (result === args[0]) {
                    message.channel.send(`I played ${result}. It's a tie!`);
                }else {
                    message.channel.send(`I played ${result}. You won!`);
                }
            break;
        }
    }
}