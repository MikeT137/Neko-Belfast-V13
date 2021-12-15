const {prefix} = require('../../config.json')
module.exports = {
    name:'feed',
    description: "It sends a feeding gif",
    usage: `${prefix}feed @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_feed = [
            'https://c.tenor.com/TviTsQOJYkkAAAAC/anime-feed.gif',
            'https://c.tenor.com/H9ozhu1kZf0AAAAd/feeding-anime-cute.gif',
            'https://c.tenor.com/pTKnWhT6FmMAAAAd/anime-feed.gif',
            'https://c.tenor.com/JHqOKnXVNDQAAAAM/azunom-feed.gif',
            'https://c.tenor.com/LuSvM9fKFRQAAAAd/bunny-girl-girlfriend.gif',
            'https://c.tenor.com/h5mRD9EQU6QAAAAC/anime-feeding.gif',
            'https://64.media.tumblr.com/733163d5dde9519d6cca1e03980be581/tumblr_inline_p7l32ml1hm1v3eowb_500.gifv',
            'https://i.gifer.com/QBt0.gif',
            'https://64.media.tumblr.com/4d160635539ef31d8b058bc3e35a907c/tumblr_p4e113SOw91wn2b96o1_400.gifv',
            'https://c.tenor.com/tJG2atwlNL8AAAAC/anime-feed.gif'
        ]
        if(message.mentions.members.size >= 1) {
            message.delete();
            if(person.id === `${bot.user.id}`) {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`Aww, thank you ${message.author.username}. I'll gladly eat the food you give me nya.`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_feed[Math.floor(Math.random() * random_feed.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else if(person.id == message.author.id) {
                const embed2 = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} is nomming on their food!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_feed[Math.floor(Math.random() * random_feed.length)])
                    .setColor('#7d77df')
                message.channel.send(embed2);
            }else {
                const embed3 = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} is feeding ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_feed[Math.floor(Math.random() * random_feed.length)])
                    .setColor('#7d77df')
                message.channel.send(embed3);
            }
        }else {
            message.channel.send('You have to ping someone to feed them')
        }
    }
}