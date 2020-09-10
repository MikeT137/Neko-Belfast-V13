module.exports = {
    name:'unban',
    description: "Unbans a user",
    run: async (bot, message, args) => {
        const member = message.mentions.members.first();

        if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send('You dont have permissions to use this command');
        
        const person = message.mentions.users.first();

        if(person) {
            const user = member.guild.member(person);

            if(user) {
                user.unban().then(() => {
                    message.channel.send(`Successfullky unbanned ${person.tag}`);
                }).catch(err => {
                    message.channel.send('I was unnable to unban that member');
                });
            }else {
                message.channel.send('That member isnt in the server')
            }
        }
    }
}