module.exports = {
    name:'kiss',
    description: "Kisses a user",
    execute(message, argument){
        if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} kisses ${member} !:blush:`);
            message.channel.send("https://media.giphy.com/media/MQVpBqASxSlFu/giphy.gif");
        }
    }
}