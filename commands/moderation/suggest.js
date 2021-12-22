const {prefix} = require('../../config.json')
module.exports = {
    name: 'suggest',
    description: "If you have any suggestions about the bot, you can send it to the creator.",
    usage: `${prefix}suggest message`,
    category: 'moderation',
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        const mikuid = '486276124549316619';

        if(!args[0]) {
            message.channel.send('You have to say something to suggest it to the creator, but please try to be as explicit as possible.')
        }else if(args[0]) {
            bot.users.fetch(`${mikuid}`).then((miku) => {
                message.channel.send('Your suggestion has been sent to the creator! Please wait for the creator to respond! (This message will be edited once he responds)').then(suggestion => {
                    const embed = new Discord.MessageEmbed()

                        .setDescription('**New Suggestion nya~!**')
                        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                        .addField('User', [
                            `\`User Tag:\` ${message.author.tag}`
                        ])
                        .addField(`Server`, [
                            `\`Server Name:\` ${message.guild.name}`
                        ])
                        .addField('Message', `${args.join(' ')}`)
                        .setColor('#7d77df')
                    miku.send(embed).then(msg => {
                        msg.react('✅'),
                        msg.react('❌')

                        const filter = (reaction, user) => {
                            return ['✅', '❌'].includes(reaction.emoji.name) && user.id === mikuid;
                        }

                        msg.awaitReactions(filter, { max: 1 }).then(collected => {
                            const reaction = collected.first();

                            if(reaction.emoji.name === '✅') {
                                suggestion.edit(':white_check_mark: - The creator has approved your suggestion and he will work or is working on it soon, thank you!')
                            }else if(reaction.emoji.name === '❌') {
                                suggestion.edit(':x: - The creator has rejected your suggestion, sorry!')
                            }
                        })
                    }).catch(error => console.log(`Oops, something went wrong:\n${error}`))
                })
            }).catch(error => console.log(`Oops, something went wrong:\n${error}`))
        }else return;
    }
}