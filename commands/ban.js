module.exports = {
    name:'ban',
    description: "Bans a user",
    execute(message, argument){
        const member = message.mentions.members.first();

        if(!argument[1]) return message.channel.send('Please specify a member');

        const person = message.mentions.users.first();

        if(person) {
            const user = member.guild.member(person);

            if(user) {
                user.ban().then(() => {
                    message.channel.send(`Successfullky banned ${person.tag}`);
                });
            }else {
                message.channel.send('That member isnt in the server')
            }
        }
    }
}