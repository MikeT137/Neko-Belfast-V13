module.exports = {
    name:'kick',
    description: "Kicks a user",
    execute(message, argument){
        const member = message.mentions.members.first();

        if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send('You dont have permissions to use this command');
        if(!message.guild.ne.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send('I dont have permission to add roles')

        if(!argument[1]) return message.channel.send('Please specify a member');

        const person = message.mentions.users.first();

        if(person) {
            const user = member.guild.member(person);

            if(user) {
                user.kick().then(() => {
                    message.channel.send(`Successfullky kicked ${person.tag}`);
                }).catch(err => {
                    message.channel.send('I was unnable to kick that member');
                });
            }else {
                message.channel.send('That member isnt in the server')
            }
        }
    }
}