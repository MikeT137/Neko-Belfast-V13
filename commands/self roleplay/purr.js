const {prefix} = require('../../config.json')
module.exports = {
    name:'purr',
    description: "It sends a purring gif",
    usage: `${prefix}purr`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_purr = [
            'https://media.tenor.com/images/5347a0ac944a8656648d7c31335f3b68/tenor.gif',
            'https://thumbs.gfycat.com/CarefreeIdolizedAmethystgemclam-small.gif',
            'https://i.pinimg.com/originals/31/4f/ff/314fff53b260f67d53ac69a6da537017.gif',
            'https://media1.tenor.com/images/3a0ab083612c7f7bd8caa9162cd7b1a1/tenor.gif?itemid=11115579',
            'https://media.giphy.com/media/YW3obh7zZ4Rj2/giphy.gif',
            'https://data.whicdn.com/images/302452164/original.gif',
            'https://i.pinimg.com/originals/f5/91/1b/f5911b6b69ca9a114372a5cf890807a6.gif',
            'https://media.giphy.com/media/cpKTmCi2iPI6k/giphy.gif',
            'https://i.kym-cdn.com/photos/images/original/001/004/286/096.gif',
            'https://i.imgur.com/1QlL8Mq.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is purring, nyaa~`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_purr[Math.floor(Math.random() * random_purr.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}