const {prefix} = require('../../config.json')
module.exports = {
    name:'avatar',
    description: "It shows yours or someone else\'s avatar",
    usage: `${prefix}avatar / ${prefix}avatar @ping`,
    category: 'info',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();

        if (!args[0]){
            const embed = new Discord.MessageEmbed()

                .setTitle(`${message.author.username}\'s avatar:`)
                .setDescription(`Format options: [WEBP](${message.author.displayAvatarURL({ format: "webp" })}), [PNG](${message.author.displayAvatarURL({ format: "png" })}), [JPG](${message.author.displayAvatarURL({ format: "jpg" })}), [JPEG](${message.author.displayAvatarURL({ format: "jpeg" })}), [GIF](${message.author.displayAvatarURL({ format: "gif" })})`)
                .setImage(`${message.author.displayAvatarURL({ dynamic: true , size: 2048, format: "png" })}`)
                .setColor('#7d77df')
            message.channel.send(embed);
        }else if (!args[1] && message.mentions.members.size == 1) {
            const embed = new Discord.MessageEmbed()
            
                .setTitle(`${person.username}\'s avatar:`)
                .setDescription(`Format options: [WEBP](${person.displayAvatarURL({ format: "webp" })}), [PNG](${person.displayAvatarURL({ format: "png" })}), [JPG](${person.displayAvatarURL({ format: "jpg" })}), [JPEG](${person.displayAvatarURL({ format: "jpeg" })}), [GIF](${person.displayAvatarURL({ format: "gif" })})`)
                .setImage(`${person.displayAvatarURL({ dynamic: true , size: 2048, format: "png" })}`)
                .setColor('#7d77df')
            message.channel.send(embed);
        }else {
            message.channel.send('You typed the wrong arguments');
        }
    }
}