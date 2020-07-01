module.exports = {
    name:'snuggle',
    description: "Snuggles a user",
    execute(message, argument){
        if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} snuggles ${member} !So adorable`);
            message.channel.send("https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif");
        }
    }
}