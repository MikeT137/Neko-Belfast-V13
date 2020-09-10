module.exports = {
    name:'unban',
    description: "Unbans a user",
    run: async (bot, message, args) => {
        const member = message.mentions.members.first();

        if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send('You dont have permissions to use this command');
        
        const bannedmember = await bot.fetchUser(args[0]);

        if(!bannedmember) return message.channel.send('Please provide an id to unban someone!');
        if(bannedmember) {
            try{
                message.guild.unban(bannedmember);
                message.channel.send(`${bannedmember} has been unbanned`)
            }catch(e) {
                console.log(e.message)
            }
        }
    }
}