module.exports = {
    name:'blush',
    description: "The user blushes",
    run: async (bot, message, args) => {
        const author = message.author;
        const Discord = require('discord.js');
        const random_blush = [
            'https://media.tenor.com/images/75936b8b93269bd293bd184eb209e358/tenor.gif',
            'https://media.tenor.com/images/f45f5c5fd72dd7c9ff50976e2bc7133c/tenor.gif',
            'https://i.pinimg.com/originals/b7/4a/5b/b74a5b128b5d65ea1fdb9090c0b3f295.gif',
            'https://i.imgur.com/hFkeViW.gif',
            'https://i.pinimg.com/originals/dd/6d/47/dd6d47837ba2952f8ccadfa4167e706b.gif',
            'https://media.tenor.com/images/0a8c1ae735519df6b91d05a6f28fd374/tenor.gif',
            'https://66.media.tumblr.com/6a3e50286b6f45fd74c515b66f81e471/tumblr_ni8yoi6qLO1u55xnmo4_500.gifv',
            'https://media.tenor.com/images/b4be3af320d6bff5196e627f9964c38d/tenor.gif',
            'https://66.media.tumblr.com/781762f9605c7b31edceb9c454677d20/tumblr_niqngeUn2K1u55xnmo5_500.gifv',
            'https://media.giphy.com/media/ulWUgCk4F1GGA/giphy.gif',
        ]
        if (!args[0]){
            const embed = new Discord.MessageEmbed()

            .setAuthor(`${author.username} is blushing`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(random_blush[Math.floor(Math.random() * random_blush.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}