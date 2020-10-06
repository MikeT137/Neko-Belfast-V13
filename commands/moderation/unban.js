module.exports = {
    name: 'unban',
    description: 'A caommand that an admin uses to unban users',
    run: async(bot, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`You do not have the permission to unban someone`)
        } else if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`I do not have the permission to unban someone`)
        }
          
        let userID = args[0]
        message.guild.fetchBans()
        .then(bans => {
            if(bans.size == 0) return 
            let bUser = bans.find(b => b.user.id == userID)
            if(!bUser) return
            message.guild.members.unban(bUser.user)
            message.channel.send('Successfully unbanned!')
        })
    }
}