const {prefix} = require('../../config.json')
module.exports = {
    name:'laugh',
    description: "It sends a laughing gif",
    usage: `${prefix}laugh`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_laugh = [
            'https://c.tenor.com/eOFR0yUSotEAAAAM/satania-laughing.gif',
            'https://c.tenor.com/B-expmjx5R0AAAAM/natsu-lol.gif',
            'https://c.tenor.com/8nSbJK3j7EUAAAAM/laugh-anime.gif',
            'https://c.tenor.com/10DgtkY20O8AAAAM/uzaki-uzaki-chan-wa-asobitai.gif',
            'https://c.tenor.com/gzM_6h_nC_sAAAAM/nichijou-hahaha.gif',
            'https://c.tenor.com/fqRNsILmXHQAAAAM/anime-girl.gif',
            'https://c.tenor.com/uiiTHEWlNQ8AAAAM/anime-laugh.gif',
            'https://c.tenor.com/xKvdQnAP8nwAAAAM/anime-laughing.gif',
            'https://c.tenor.com/KBBH8fFA3aEAAAAM/anime-giggle.gif',
            'https://c.tenor.com/74Win7VdWDoAAAAM/anime-laughing.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} starts laughing`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_laugh[Math.floor(Math.random() * random_laugh.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}