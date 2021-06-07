const {prefix} = require('../../config.json')
module.exports = {
    name:'muterole',
    description: "It creates or deletes a role called \"BMuted\", which can be used in the mute/unmute command, however, you still have to set the permissions in the channel or category to \`SEND_MESSAGES: false\`",
    usage: `${prefix}muterole`,
    category: 'moderation',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        let muterole = message.guild.roles.cache.find(role => role.name === 'BMuted')

        if(!message.member.hasPermission("MANAGE_ROLES")) {
            message.channel.send('You don\'t have permissions to use this command. (MANAGE_ROLES)');
        }else {
            const embed = new Discord.MessageEmbed()
        
                .setTitle(`${message.author.username}, what do you want to do with the muterole (BMuted) ?`)
                .setDescription(':white_check_mark: - create a new one\n:x: - delete the current one')
                .setColor('#7d77df')
            message.channel.send(embed)
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
                        if(muterole) {
                            message.channel.send('I already created a muterole.')
                        }else{
                            message.guild.roles.create({
                                data: {
                                    name: 'BMuted',
                                    color: 'RED',
                                    permissions: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'],
                                    mentionable: false
                                }
                            })
                            message.channel.send('The new muterole has been created! That is the role that i will give when muting users, but keep in mind that you still have to set the permissions in the channel or category to \`SEND_MESSAGES: false\`')
                        }
                    }else if(reaction.emoji.name === '❌') {
                        if(!muterole) {
                            message.channel.send('There is no muterole to be deleted.')
                        }else {
                            muterole.delete();
                            message.channel.send('The muterole has been deleted!')
                        }
                    }
                }).catch(err)
            }).catch(err)
        }
    }
}