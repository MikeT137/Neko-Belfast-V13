const {prefix} = require('../../config.json')
module.exports = {
    name:'kiss',
    description: "It sends a kissing gif",
    usage: `${prefix}kiss @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_kiss = [
            'https://c.tenor.com/dJU8aKmPKAgAAAAd/anime-kiss.gif',
            'https://c.tenor.com/Hcvab1NgNdkAAAAC/kiss-anime.gif',
            'https://i.gifer.com/8Sbz.gif',
            'https://c.tenor.com/U37lEqz9QPMAAAAC/kiss-anime.gif',
            'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
            'https://i.pinimg.com/originals/66/19/1b/66191b81d5bf6c70bd065736f3e8662b.gif',
            'https://c.tenor.com/I8kWjuAtX-QAAAAM/anime-ano.gif',
            'https://acegif.com/wp-content/uploads/anime-kiss-38.gif',
            'https://c.tenor.com/SqpFZQfcyEgAAAAM/anime-kiss.gif',
            'https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-10.gif'
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send(`It\'s okay ${message.author.username}! I\'m sure you\'ll get someone to be by your side! Stay strong nya~`)
            }else if(person.id === `${bot.user.id}`) {
                message.delete();
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`M-Master, not in front of everyone!!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_kiss[Math.floor(Math.random() * random_kiss.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else {
                message.delete();
                const embed2 = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} gave ${person.username} a kiss`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_kiss[Math.floor(Math.random() * random_kiss.length)])
                    .setColor('#7d77df')
                message.channel.send(embed2);
            }
        }else {
            message.channel.send('You have to ping someone to kiss them')
        }
    }
}