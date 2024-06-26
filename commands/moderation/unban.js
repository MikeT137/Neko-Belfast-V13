const {prefix} = require('../../config.json')
module.exports = {
    name: 'unban',
    description: 'It unbans a user (you have to be admin)',
    usage: `${prefix}unban userID`,
    category: 'moderation',
    run: async(bot, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`You do not have the permission to unban someone. (BAN_MEMBERS)`)
        } else if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`I do not have the permission to unban someone`)
        }

        message.guild.fetchBans()
        .then(bans => {
            let bUser = bans.find(b => b.user.id == args[0])

            if(bUser) {
                message.guild.members.unban(bUser.user)
                message.channel.send('Successfully unbanned!')
            }else{
                message.channel.send('I couldn\'t find the user you are trying to unban')
            }
        }).catch(error => console.log(`Oops, something went wrong:\n${error}`))
    }
}