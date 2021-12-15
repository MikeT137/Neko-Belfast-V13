const {prefix} = require('../../config.json')
module.exports = {
    name:'rage',
    description: "It sends a raging gif",
    usage: `${prefix}rage`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_mad = [
            'https://c.tenor.com/QmGTdQZ0KnIAAAAM/fuuka-miyazawa-anime.gif',
            'https://c.tenor.com/-qfnP6F_EtIAAAAM/yuru-yuri-chinatsu-yoshikawa.gif',
            'https://c.tenor.com/wtSs_VCHYmEAAAAM/noela-angry.gif',
            'https://c.tenor.com/rzDkOlEDun0AAAAM/hayase-nagatoro-nagatoro-angry.gif',
            'https://c.tenor.com/X3x3Y2mp2W8AAAAM/anime-angry.gif',
            'https://c.tenor.com/jgFVzr3YeJwAAAAM/date-a-live-rage.gif',
            'https://c.tenor.com/MvKZZ7JCkUMAAAAM/anime-angry.gif',
            'https://c.tenor.com/ikKAd57zDEwAAAAM/anime-mad.gif',
            'https://c.tenor.com/9JUYPgGXEtgAAAAM/anime-angly.gif',
            'https://c.tenor.com/2YmFNn9rx1EAAAAM/bakugo-angry-cake.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is getting really angry`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_mad[Math.floor(Math.random() * random_mad.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}