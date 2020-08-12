const { sign } = require("mathjs");

module.exports = {
    name: 'wew',
    description: 'just testing the emoji reactions',
    run: async(bot, message, args) => {
        message.channel.send('This is the first message').then(msg => {
            msg.react('👍');
            msg.react('✊');
            msg.react('👎');
            const filter = (reaction, user) => {
                return ['👍', '✊', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
            };

            msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
            
                    if(reaction.emoji.name === '👍') {
                        msg.edit('This is the secind message')
                        msg.reactions.forEach(reaction => reaction.remove)
                            
                    }
                })
        })
    }
}