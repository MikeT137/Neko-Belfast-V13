module.exports = {
    name:'blush',
    description: "The user blushes",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const fetch = require('node-fetch');
        url = 'https://api.otakugifs.xyz/gif/blush'

        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'pj7g9seujJByserio0awmvx66W8fFtrboW9kVVNeu13yHbBgE3IsgNBS3rUuD8321l2CH3tST900dhEyd0qH9P2',
            },
        }).then((res) => {
            console.log(res);
            res.json();
        }).then((json) => {
            if (!args[0]) {
                const embed = new Discord.MessageEmbed()
        
                .setAuthor(`${message.author.username} is blushing`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(json.url[Math.floor(Math.random() * json.url.length)])
                .setFooter('powered by otakugifs.xyz')
                .setColor(0x4AEFBA)
                message.channel.send(embed)
            }
        })
        /*const random_blush = [
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
            'https://media1.tenor.com/images/15906d3886ab1e14afa1da583cc63953/tenor.gif?itemid=14495463',
        ]
        if (!args[0]){
            const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is blushing`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(random_blush[Math.floor(Math.random() * random_blush.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }*/
    }
}