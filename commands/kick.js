module.exports = {
    name:'kick',
    description: "Kicks a user",
    execute(message, argument){
        if(!argument[1]) return message.channel.send('Please specify a member');

        const person = message.mentions.users.first();
        if(person) {
            person.kick.then(() => {
                message.channel.send(`Successfullky kicked ${person.tag}`);
            }).catch(err => {
                message.channel.send('I was unnable to kick that user');
            });
        }else {
            message.channel.send('That user isnt in the server')
        }
    }
}