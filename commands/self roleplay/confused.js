const {prefix} = require('../../config.json')
module.exports = {
    name:'confused',
    description: "It sends a confusing gif",
    usage: `${prefix}confused`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_confused = [
            'https://c.tenor.com/-7rziEn-GroAAAAM/karen-confus-confused.gif',
            'https://c.tenor.com/3Vm0IYNFtKsAAAAM/re-life-anime.gif',
            'https://c.tenor.com/TrHxqt2ydMMAAAAM/anime-confused.gif',
            'https://c.tenor.com/Du4_OcJmFsgAAAAM/xoxo-cute.gif',
            'https://c.tenor.com/96mR_W6LE1EAAAAM/anime-confusion-what.gif',
            'https://c.tenor.com/f6Y7sFrlrMcAAAAM/kafuu-chino-wondering.gif',
            'https://c.tenor.com/9MZqftir4ngAAAAM/anime-shocked.gif',
            'https://c.tenor.com/2X3LMvSvzncAAAAM/confused-question.gif',
            'https://c.tenor.com/1RyM7ikzraIAAAAM/anime-what.gif',
            'https://c.tenor.com/XNxXLT5i2j8AAAAM/aoba-huh.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is confused`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_confused[Math.floor(Math.random() * random_confused.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}