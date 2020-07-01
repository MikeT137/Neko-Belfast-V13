module.exports = {
    name:'hug',
    description: "Hugs a user",
    execute(message, argument){
        let member = message.mentions.members.first()

        if(!argument[3]){
            message.channel.send(`${message.author} gave ${member} a hug!`, 
            file: "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
            );
        }
    }
}