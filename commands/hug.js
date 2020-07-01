module.exports = {
    name:'hug',
    description: "Hugs a user",
    execute(message, argument){
        if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} gave ${member} a hug!`);
            message.channel.send("https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif");
        }
    }
}