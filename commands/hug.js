module.exports = {
    name:'hug',
    description: "Hugs a user",
    execute(message, argument){
        let member = message.mentions.members.first()

        if(argument[2] == `${member}`){
            message.channel.send(`${message.author} gave ${member} a hug!`);
            message.channel.send('https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif');
        }
    }
}