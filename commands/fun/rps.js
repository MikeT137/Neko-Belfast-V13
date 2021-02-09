module.exports = {
    name: 'rps',
    description: 'The user plays rock paper scissors',
    run: async (bot, message, args) => {
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = [Math.floor(Math.random() * acceptedReplies.length)];
        const result = acceptedReplies[random];

        if (!args[0]) return message.channel.send(`You have to \"choose your weapon\": \`${acceptedReplies.join(', ')}\``);
        if (!acceptedReplies.includes(args[0])) return message.channel.send(`You can only use: \`${acceptedReplies.join(', ')}\``);
        if (result === args[0]) return message.channel.send(`I played ${result}. It's a tie!`);
        
        switch (args[0]) {
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
}