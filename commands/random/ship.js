const {prefix} = require('../../config.json')
module.exports = {
    name: 'ship',
    description: 'It sends a random level of love-affinity between 2 users (yourself with another user / two other users)',
    usage: `${prefix}ship (ping) / b.ship (ping) (ping)`,
    category: 'random',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const mentions = message.mentions.users.first(2);
        const person = mentions[0];
        const person2 = mentions[1];

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        if(!args[0]) {
            message.channel.send('You have to ping someone for the command to work')
        }else if(message.mentions.members.size == 1) {
            if(person.id == message.author.id) {
                message.channel.send('You can\'t ship yourself');
            }else if(person.id === '727093236954431488') {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} x ${person.username} =`, message.author.displayAvatarURL({ dynamic: true }))
                    .setTitle(`**${message.author.username.slice(0, message.author.username.length / 2)}${person.username.slice(person.username.length / 2, person.username.length)}**`)
                    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                    .addField(`💟 100%`, `💖💖💖💖💖💖💖💖💖💖`)
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} x ${person.username} =`, message.author.displayAvatarURL({ dynamic: true }))
                    .setTitle(`**${message.author.username.slice(0, message.author.username.length / 2)}${person.username.slice(person.username.length / 2, person.username.length)}**`)
                    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                    .addField(`💟 ${Math.floor(love)}%`, `${loveLevel}`)
                    .setColor('#7d77df')
                message.channel.send(embed);
            }
        }
        if(message.mentions.members.size == 2) {
            if(person.id === '727093236954431488' || person2.id === '727093236954431488') {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${person.username} x ${person2.username} =`, message.author.displayAvatarURL({ dynamic: true }))
                    .setTitle(`**${person.username.slice(0, person.username.length / 2)}${person2.username.slice(person2.username.length / 2, person2.username.length)}**`)
                    .setThumbnail(person.displayAvatarURL({dynamic: true}))
                    .addField(`💟 100%`, `💖💖💖💖💖💖💖💖💖💖`)
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${person.username} x ${person2.username} =`, message.author.displayAvatarURL({ dynamic: true }))
                    .setTitle(`**${person.username.slice(0, person.username.length / 2)}${person2.username.slice(person2.username.length / 2, person2.username.length)}**`)
                    .setThumbnail(person.displayAvatarURL({dynamic: true}))
                    .addField(`💟 ${Math.floor(love)}%`, `${loveLevel}`)
                    .setColor('#7d77df')
                message.channel.send(embed);
            }
        }
    }
}