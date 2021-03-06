module.exports = {
    name: 'rps',
    description: 'The user plays rock paper scissors',
    run: async (bot, message, args) => {
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor(Math.random() * acceptedReplies.length);
        const result = acceptedReplies[random];

        if (!args[0]) {
            message.channel.send(`You have to \"choose your weapon\": \`${acceptedReplies.join(', ')}\``);
        }else if (!acceptedReplies.includes(args[0])) {
            message.channel.send(`You can only use: \`${acceptedReplies.join(', ')}\``);
        }else if (result === args[0]) {
            message.channel.send(`I played ${result}. It's a tie!`);
        }
        switch (args[0]) {
            case 'rock':
                if (result === 'paper') {
                    message.channel.send(`I played ${result}. I won!`);
                }else {
                    message.channel.send(`I played ${result}. You won!`);
                }
            break;
            
            case 'paper':
                if (result === 'scissors') {
                    message.channel.send(`I played ${result}. I won!`);
                }else {
                    message.channel.send(`I played ${result}. You won!`);  
                }      
            break;

            case 'scissors':
                if (result === 'rock') {
                    message.channel.send(`I played ${result}. I won!`);
                }else {
                    message.channel.send(`I played ${result}. You won!`);
                }
            break;
        }
    }
}