const {prefix} = require('../../config.json')
module.exports = {
    name:'snuggle',
    description: "It sends a snuggling gif",
    usage: `${prefix}snuggle @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_snuggle = [
            'https://c.tenor.com/dbIbtIyByEwAAAAM/cuddle-anime.gif',
            'https://c.tenor.com/08vDStcjoGAAAAAd/cuddle-anime-hug-anime.gif',
            'https://i.pinimg.com/originals/3a/f5/db/3af5db578c62007ebbed765c23949bb8.gif',
            'https://i.pinimg.com/originals/93/2c/2f/932c2f0c043797342f40c6892ffc93eb.gif',
            'https://media2.giphy.com/media/Y8wCpaKI9PUBO/giphy.gif?cid=790b76115b98a6257c0f1b02afe768e35bd7547e646e9846&rid=giphy.gif&ct=g',
            'https://c.tenor.com/gowinK__PvAAAAAC/anime-cuddle.gif',
            'https://64.media.tumblr.com/6d4e50d3a62e5a90500eadc0537843b2/tumblr_mkiknpSJxF1rbtx3po1_500.gifv',
            'https://acegif.com/wp-content/gif/anime-hug-59.gif',
            'https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif',
            'https://acegif.com/wp-content/uploads/anime-love-43.gif'
        ]
        if(message.mentions.members.size >= 1) {
            message.delete();
            if(person.id === `${bot.user.id}`) {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`Thank you master, you always make me feel good nyaa~`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_snuggle[Math.floor(Math.random() * random_snuggle.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else if(person.id == message.author.id) {
                const embed2 = new Discord.MessageEmbed()

                    .setAuthor(`Aww, its okay, belfast will give you some snuggles nya~`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_snuggle[Math.floor(Math.random() * random_snuggle.length)])
                    .setColor('#7d77df')
                message.channel.send(embed2);
            }else {
                const embed3 = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} is snuggling ${person.username}, so cute`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_snuggle[Math.floor(Math.random() * random_snuggle.length)])
                    .setColor('#7d77df')
                message.channel.send(embed3);
            }
        }else {
            message.channel.send('You have to ping someone to snuggle them')
        }
    }
}