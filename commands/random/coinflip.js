const {prefix} = require('../../config.json')
module.exports = {
    name: 'coinflip',
    description: 'It flips a coin',
    usage: `${prefix}coinflip`,
    category: 'random',
    run: async (bot, message, args) => {
        const coinface = [
            'Heads!',
            'Tails!'
        ]

        if(Math.random() * 100 < 0.01) {
            message.channel.send('OMG it landed on the edge! Amazing!')
        }else {
            message.channel.send(`${coinface[Math.floor(Math.random() * coinface.length)]}`)
        }
    }
}