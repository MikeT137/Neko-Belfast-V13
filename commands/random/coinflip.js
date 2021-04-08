const {prefix} = require('../../config.json')
module.exports = {
    name: 'coinflip',
    description: 'It flips a coin',
    usage: `${prefix}coinflip`,
    category: 'random',
    run: async (bot, message, args) => {
        const coinface = [
            'Heads!',
            'OMG it landed on the edge! Amazing!',
            'Tails!'
        ]
        const answer = coinface[Math.floor(Math.random() * coinface.length)];
        
        message.channel.send(`${answer}:coin:`)
    }
}