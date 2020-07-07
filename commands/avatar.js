module.exports = {
    name:'avatar',
    description: "Shows you your avatar",
    execute(message, argument){
        const author = message.author;
        const person = message.mentions.users.first();

        if (!argument[1])
            return message.channel.send(`${author.username}'s avatar: ${author.displayAvatarURL({ dynamic: true })}`);
        else if (!argument[2] && message.mentions.members.size == 1)
            message.channel.send(`${person.username}s avatar: ${person.displayAvatarURL({ dynamic: true })}`);
        else
            message.channel.send('You typed therong arguments');
        break;
    }
}