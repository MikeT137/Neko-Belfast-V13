module.exports = {
    name:'avatar',
    description: "Shows you your avatar",
    execute(message, argument){
        if (!argument[1]){
            const user = message.author;
            return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
        }
    }
}