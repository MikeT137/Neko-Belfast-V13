module.exports = {
    name:'avatar',
    description: "Shows you your avatar",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const author = message.author;
        const person = message.mentions.users.first();

        if (!args[0]){
            const embed = new Discord.MessageEmbed()

                .setTitle(`${author.username}'s avatar:`)
                .setImage(`${author.displayAvatarURL({ dynamic: true })}`)
                .setColor('#7d77df')
            message.channel.send(embed);
        }else if (!args[1] && message.mentions.members.size == 1) {
            const embed = new Discord.MessageEmbed()
            
                .setTitle(`${person.username}'s avatar:`)
                .setImage(`${person.displayAvatarURL({ dynamic: true })}`)
                .setColor('#7d77df')
            message.channel.send(embed);
        }else {
            message.channel.send('You typed the wrong arguments');
        }
    }
}