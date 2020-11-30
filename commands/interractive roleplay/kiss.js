module.exports = {
    name:'kiss',
    description: "Kisses a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
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
            if(person.id == message.author.id) {
                message.channel.send(`;-; It\'s okay ${message.author.username} ! I\`m sure you'll get someone to be by your side! I\`m sure of it nya~`)
            }else {
                const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} gave ${person.username} a kiss!`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(random_kiss[Math.floor(Math.random() * random_kiss.length)])
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to kiss them')
        }
    }
}