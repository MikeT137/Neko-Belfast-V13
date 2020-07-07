module.exports = {
    name:'kick',
    description: "Kicks a user",
    execute(message, argument){
        const member = message.mentions.members.first();

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