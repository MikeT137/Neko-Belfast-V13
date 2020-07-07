module.exports = {
    name:'avatar',
    description: "Shows you your avatar",
    execute(message, argument){
        const Discord = require('discord.js');
        const author = message.author;
        const person = message.mentions.users.first();

        if (!argument[1]){
            const embed = new Discord.MessageEmbed()

            .setTitle(`${author.username}'s avatar:`)
            .setImage(`${author.displayAvatarURL({ dynamic: true })}`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }else if (!argument[2] && message.mentions.members.size == 1) {
            const embed = new Discord.MessageEmbed()

            .setTitle(`${person.username}s avatar:`)
            .setImage(`${person.displayAvatarURL({ dynamic: true })}`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }else {
            message.channel.send('You typed the wrong arguments');
        }
    }
}