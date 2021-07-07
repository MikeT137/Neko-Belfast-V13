const {prefix} = require('../../config.json')
module.exports = {
    name:'love',
    description: "It sends a loving gif",
    usage: `${prefix}love @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_love = [
            'https://media1.tenor.com/images/59371e16bf2c92a158a0bf84e1e70bb6/tenor.gif?itemid=12479110',
            'https://kindyou.com/wp-content/uploads/2018/10/Super-Cute-Anime-Love-Gifs-1.gif',
            'https://i.pinimg.com/originals/4c/7d/3e/4c7d3e30212426af4e3fbbbd06b57588.gif',
            'https://acegif.com/wp-content/uploads/anime-love-13.gif',
            'https://i.pinimg.com/originals/44/07/c9/4407c96aa6d087b3f6d5f693495145e6.gif',
            'https://monophy.com/media/bm2O3nXTcKJeU/monophy.gif',
            'https://i.pinimg.com/originals/6d/b5/4c/6db54c4d6dad5f1f2863d878cfb2d8df.gif',
            'https://media.tenor.com/images/816ebcd1165532d7a72027c331faed90/tenor.gif',
            'https://acegif.com/wp-content/uploads/anime-love-29.gif',
            'https://media1.tenor.com/images/76759e35bbebfbd2eff634577b46adb0/tenor.gif?itemid=15810160'
        ]
        if(message.mentions.members.size >= 1) {
            message.delete();
            if(person.id === '727093236954431488') {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`I love you too ${message.author.username}!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_love[Math.floor(Math.random() * random_love.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else if(person.id == message.author.id) {
                const embed2 = new Discord.MessageEmbed()

                    .setAuthor(`A bit of self love is always good ${message.author.username}!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_love[Math.floor(Math.random() * random_love.length)])
                    .setColor('#7d77df')
                message.channel.send(embed2);
            }else {
                const embed3 = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} loves you ${person.username}!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_love[Math.floor(Math.random() * random_love.length)])
                    .setColor('#7d77df')
                message.channel.send(embed3);
            }
        }else {
            message.channel.send('You have to ping someone to love them')
        }
    }
}