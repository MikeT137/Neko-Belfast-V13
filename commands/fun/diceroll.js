module.exports = {
    name: 'diceroll',
    description: 'The user rolls a dice',
    run: async (bot, message, args) => {
        const d4 = ['1', '2', '3', '4']
        const d6 = ['1', '2', '3', '4', '5', '6']
        const d8 = ['1', '2', '3', '4', '5', '6', '7', '8']
        const d10 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        const d12 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        const d20 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
        const number4 = d4[Math.floor(Math.random() * d4.length)];
        const number6 = d6[Math.floor(Math.random() * d6.length)];
        const number8 = d8[Math.floor(Math.random() * d8.length)];
        const number10 = d10[Math.floor(Math.random() * d10.length)];
        const number12 = d12[Math.floor(Math.random() * d12.length)];
        const number20 = d20[Math.floor(Math.random() * d20.length)];

        if(!args[0]){
            message.channel.send('You have to specify what type of dice you want to roll. Accepted responses: \`4, 6, 8, 10, 12, 20\`')
        }else switch(args[0]) {
            case '4':
                message.channel.send(`${number4}`)
            break;

            case '6':
                message.channel.send(`${number6}`)
            break;

            case '8':
                message.channel.send(`${number8}`)
            break;
            
            case '10':
                message.channel.send(`${number10}`)
            break;
                        
            case '12':
                message.channel.send(`${number12}`)
            break;
                        
            case '20':
                message.channel.send(`${number20}`)
            break;
        }
    }
}