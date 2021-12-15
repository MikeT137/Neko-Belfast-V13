const {prefix} = require('../../config.json')
module.exports = {
    name:'scared',
    description: "It sends a scarring gif",
    usage: `${prefix}scared`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_scared = [
            'https://c.tenor.com/oDaR_1ydefIAAAAM/scared-anime.gif',
            'https://c.tenor.com/wWmjeJgcFr4AAAAM/nervous-anime.gif',
            'https://c.tenor.com/KGA_8bNQRWcAAAAM/ishigami-scared.gif',
            'https://c.tenor.com/zaA5Pjj5uLEAAAAM/what-anime.gif',
            'https://c.tenor.com/jVVajFO7j0AAAAAM/hiding-spooked.gif',
            'https://c.tenor.com/RhyxCbENd6YAAAAM/umaru-chan-scared.gif',
            'https://c.tenor.com/WcxwXmB-YiIAAAAM/anime-pillow.gif',
            'https://c.tenor.com/m3hU0lQpvgYAAAAM/yuko-yoshida.gif',
            'https://c.tenor.com/yCQNCPxF_ksAAAAM/scared-anime.gif',
            'https://c.tenor.com/iK9XPxhJ0rIAAAAM/scared-chika.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is scared`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_scared[Math.floor(Math.random() * random_scared.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}