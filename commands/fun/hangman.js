const {prefix} = require('../../config.json')
module.exports = {
    name: 'hangman',
    description: 'It sends a hangman game in the channel that you want, with the word/sentence that you want. It also deletes the command message so people don\'t see what word you chose.',
    usage: `${prefix}hangman #channel (word/sentence)`,
    category: 'fun',
    run: async (bot, message, args) => {
        const { hangman } = require('reconlx')

        if(!args[0]) {
            message.channel.send('Please specify a channel!')
        }else if(!args[1]) {
            message.channel.send('Please specify a word or a sentence!')
        }else {
            message.delete()
            message.channel.send(`${message.author.username} started a game of hangman in <#${message.mentions.channels.first().id}>, check it out!`)

            setTimeout(function(){
                const hang = new hangman({
                    message: message,
                    word: args.slice(1).join(" "),
                    client: bot,
                    channelID: message.mentions.channels.first().id,
                });
                hang.start();
            }, 2000)
        }
    }
}