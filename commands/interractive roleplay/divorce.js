module.exports = {
    name:'divorce',
    description: "A user can divorce another user",
    run: async (bot, message, args) => {
        const person = message.mentions.users.first();
        const spouse = bot.life.get(message.author.id, 'spouse')
        
        if (spouse !== 0) {
            message.channel.send('You need to have a spouse to divorce them')
        }else if(args[0] || message.mentions.members.size == 1) {
            message.channel.send(`${person.username}, ${message.author.username} wants a divorce!\n\`React with :white_check_mark: to agree, or :x: to disagree (you have one minute to respond)\``)
            .then(msg => {
                msg.react('✅'),
                msg.react('❌')

                const filter = (reaction, user) => {
                    return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
                }

                msg.awaitReactions(filter, { max: 1 })
                .then(collected => {
                    const reaction = collected.first();
                    if(reaction.emoji.name === '✅') {
                        message.channel.send(`${message.author.username} and ${person.username} are now divorced! :confused:`)
                        bot.life.set(message.author.id, 0, 'spouse')
                        bot.life.set(spouse, 0, 'spouse')
                    }else if(reaction.emoji.name === '❌') {
                        message.channel.send(`${person.username} doesn\'t want a divorce!`)
                    }else return;
                }, 60000)
            })
        }else return;
    }
}