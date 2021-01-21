module.exports = {
    name:'love',
    description: "The bot gives a nice message and snuggles the user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        var person2 = message.guild.members.random();
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        if(!args[0]) {
            const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} and ${person2.username} love eachother this much:`, message.author.displayAvatarURL({ dynamic: true }))
                .setThumbnail(person2.displayAvatarURL({dynamic: true}))
                .addField(`💟 ${Math.floor(love)}%`, `${loveLevel}`)
                .setColor('#7d77df')
            message.channel.send(embed);
        }else if(message.mentions.members.size == 1) {
            if(person.id == message.author.id) {
                message.channel.send('You can\'t do this command to yourself');
            }else {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} and ${person.username} love eachother this much:`, message.author.displayAvatarURL({ dynamic: true }))
                    .setThumbnail(person.displayAvatarURL({dynamic: true}))
                    .addField(`💟 ${Math.floor(love)}%`, `${loveLevel}`)
                    .setColor('#7d77df')
                message.channel.send(embed);
            }
        }
    }
}