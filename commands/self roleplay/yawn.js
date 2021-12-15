const {prefix} = require('../../config.json')
module.exports = {
    name:'yawn',
    description: "It sends a yawning gif",
    usage: `${prefix}yawn`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_yawn = [
            'https://c.tenor.com/1UjVG4tHsPQAAAAM/lucky-star-yawn.gif',
            'https://c.tenor.com/ra1eKneb4gcAAAAM/sleepy-nichijou.gif',
            'https://c.tenor.com/jv-3NEyxpBwAAAAM/anime-yawning.gif',
            'https://c.tenor.com/Pu42qpMGiusAAAAM/anime-girl.gif',
            'https://c.tenor.com/YDV4jEpOF1oAAAAM/nadeshiko-yawn.gif',
            'https://c.tenor.com/oKfXYxzcx6QAAAAM/rin-shelter.gif',
            'https://c.tenor.com/pXLDlms6KakAAAAM/anime-good-morning.gif',
            'https://c.tenor.com/jrXZjws5IVwAAAAM/azusa-aizawa-azusa.gif',
            'https://c.tenor.com/_IBaj604zp8AAAAM/tired-kon.gif',
            'https://c.tenor.com/re6eeBTnXcsAAAAM/iruru-ilulu.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is sleepy`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_yawn[Math.floor(Math.random() * random_yawn.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}