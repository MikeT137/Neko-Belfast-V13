module.exports = {
    name:'ban',
    description: "Bans a user",
    run: async (bot, message, args) => {
        const member = message.mentions.users.first();

        if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send('You dont have permissions to use this command');

        if(member) {
            const user = message.guild.member(member);

            if(user) {
                user.ban().then(() => {
                    message.channel.send(`Successfullky banned ${member.tag}`);
                });
            }else {
                message.channel.send('That member isnt in the server')
            }
        }else{
            message.channel.send('Please specify a member');
        }
    }
}