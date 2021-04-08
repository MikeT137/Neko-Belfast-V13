const {prefix} = require('../../config.json')
module.exports = {
    name: 'rng',
    description: 'It gives you a random number but you have to specify the maximum value\nSidenote: your value has to be higher than 1',
    usage: `${prefix}rng (number)`,
    category: 'random',
    run: async (bot, message, args) => {
        if(!args[0]) {
            message.channel.send('You have to specify a number/limit of the random number (has to be higher than 1)')
        }else if(args[0] > '1') {
            message.channel.send(`Your random number is: ${Math.floor(Math.random() * Math.floor(args[0]))+1}`)
        }else if(args[0] = '1') {
            message.channel.send('Try again but with a number higher than 1')
        }else if (args[1]) {
            message.channel.send('Please dont add any other arguments other than your number')
        }else return;
    }
}