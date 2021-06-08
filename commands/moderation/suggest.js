const {prefix} = require('../../config.json')
module.exports = {
    name: 'suggest',
    description: "If you have any suggestions about the bot, you can send it to the creator.",
    usage: `${prefix}suggest (message)`,
    category: 'moderation',
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        const mikuid = '486276124549316619';

        if(!args[0]) {
            message.channel.send('You have to say something to suggest it to the creator, but please try to be as explicit as possible.')
        }else if(args[0]) {
            bot.users.fetch(`${mikuid}`).then((user) => {
                const embed = new Discord.MessageEmbed()

                    .setDescription('**New Suggestion nya~!**')
                    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                    .addField('User', [
                        `\`User Tag:\` ${message.author.tag}`,
                        `\`User ID:\` ${message.author.id}`,
                    ])
                    .addField(`Server`, [
                        `\`Server Name:\` ${message.guild.name}`,
                        `\`Server ID\`: ${message.guild.id}`,
                    ])
                    .addField('Message', `${args.join(' ')}`)
                    .setColor('#7d77df')
                user.send(embed).then(msg => {
                    msg.react('✅'),
                    msg.react('❌')
                }).catch(err)

                message.channel.send('Your suggestion has been sent to the creator, thank you for your time<3')
            }).catch(error => console.log(`Oops, something went wrong:\n${error}`))
        }else return;
    }
}