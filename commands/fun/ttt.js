const {prefix} = require('../../config.json')
module.exports = {
    name: 'ttt',
    description: 'You play tic-tac-toe with another user! The way it works is that you have to react with an emoji to where you want to put your X, and the first one to get a straight line of 3 (X or O) wins! Here\'s the template:\n:one::two::three:\n:four::five::six:\n:seven::eight::nine:',
    usage: `${prefix}ttt @ping`,
    category: 'fun',
    run: async (bot, message, args) => {
        const person = message.mentions.members.first()
        const { tictactoe } = require('reconlx')

        if(message.mentions.members.size >= 1) {
            new tictactoe({
                player_two: person,
                message: message
            })
        }else {
            message.channel.send('Please specify a member!')
        }
    }
}