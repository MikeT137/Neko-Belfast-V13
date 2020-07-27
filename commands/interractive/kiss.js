module.exports = {
    name:'kiss',
    description: "Kisses a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const author = message.author;
        const person = message.mentions.users.first();
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
        if(message.mentions.members.size >= 1) {
            const embed = new Discord.MessageEmbed()

            .setTitle(`${author.username} gave ${person.username} a kiss!`)
            .setImage(random_kiss[Math.floor(Math.random() * random_kiss.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}