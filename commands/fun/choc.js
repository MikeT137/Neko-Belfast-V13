module.exports = {
    name: 'choc',
    description: 'Lovely gf choc',
    run: async (bot, message, args) => {
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
            'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
            'https://i.gifer.com/QPB7.gif',
        ]
        if(!args[0]) {
            const embed = new Discord.MessageEmbed()

            .setAuthor('Hey Choc :3 Im really grateful for accepting me in your life, and i love the good memories we\'ve had so far, and i cant wait to make even more god memoriesI LOVE YOU <3')
            .setImage(random_kiss[Math.floor(Math.random() * random_kiss.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}