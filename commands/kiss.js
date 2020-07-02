module.exports = {
    name:'kiss',
    description: "Kisses a user",
    execute(message, argument){
        const Discord = require('discord.js');
        const random_kiss = [
            'https://media.giphy.com/media/MQVpBqASxSlFu/giphy.gif',
            'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
            'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
            'https://media.giphy.com/media/11rWoZNpAKw8w/giphy.gif',
            'https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif',
            'https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif',
            'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
            'https://thumbs.gfycat.com/WarpedSlightFrigatebird-size_restricted.gif',
            'https://pa1.narvii.com/6836/cf4d3f8516103d493f7f7d6a18cc3082eca0a063_hq.gif',
            'https://i.gifer.com/QPB7.gif',
        ]
        if(!argument[2] && message.mentions.members.size == 1) {
            const embed = new Discord.MessageEmbed()

            .setImage(random_kiss[Math.floor(Math.random() * random_kiss.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}