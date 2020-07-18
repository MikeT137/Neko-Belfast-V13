module.exports = {
    name:'ban',
    description: "Bans a user",
    run: async (bot, message, argument){
        const member = message.mentions.members.first();

        if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send('You dont have permissions to use this command');

        if(!argument[1]) return message.channel.send('Please specify a member');

        if(!argument[1]) return message.channel.send('Please specify a member');

        const person = message.mentions.users.first();

        if(person) {
            const user = member.guild.member(person);

            if(user) {
                user.ban().then(() => {
                    message.channel.send(`Successfullky banned ${person.tag}`);
                }).catch(err => {
                    message.channel.send('I was unnable to ban that member');
                });
            }else {
                message.channel.send('That member isnt in the server')
            }
        }
    }
}