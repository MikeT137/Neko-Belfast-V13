const {prefix} = require('../../config.json')
module.exports = {
    name:'cry',
    description: "It sends a crying gif",
    usage: `${prefix}cry`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_cry = [
            'https://c.tenor.com/N2qSCBkdracAAAAM/neko-anime.gif',
            'https://c.tenor.com/q0nNfTktQ7wAAAAM/crying-anime.gif',
            'https://c.tenor.com/OfYt0T0tgCYAAAAM/anime-cry.gif',
            'https://c.tenor.com/OhuSWqAsQH4AAAAM/anime-girl-sad-sad.gif',
            'https://c.tenor.com/xb3lLfpZTCkAAAAM/akame-crying-akame-cry.gif',
            'https://c.tenor.com/Q0HUwg81A_0AAAAM/anime-cry.gif',
            'https://c.tenor.com/q9V98YHPZX4AAAAM/anime-umaru.gif',
            'https://c.tenor.com/thw0X00MurYAAAAM/anime-crying.gif',
            'https://c.tenor.com/gDk49oAcW9QAAAAM/anime-cry-cry.gif',
            'https://c.tenor.com/cpDRqZxQvYQAAAAM/sorry-anime.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is crying ;-;`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_cry[Math.floor(Math.random() * random_cry.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}