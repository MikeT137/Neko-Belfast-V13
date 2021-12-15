const {prefix} = require('../../config.json')
module.exports = {
    name:'lewd',
    description: "It sends a blushing-from-lewd gif",
    usage: `${prefix}lewd`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_blush = [
            'https://c.tenor.com/DClAW7QdzCwAAAAC/blushing-anime.gif',
            'https://c.tenor.com/hCqcNUuWCf0AAAAM/blush-anime.gif',
            'https://c.tenor.com/HBjElxuQjuIAAAAC/anime-blush.gif',
            'https://c.tenor.com/uT9BWeRBJwYAAAAC/blushing-anime-girl.gif',
            'https://c.tenor.com/1A8A4X3V_UUAAAAC/anime-girl.gif',
            'https://c.tenor.com/a-gO_pUqgjIAAAAC/anime-blush.gif',
            'https://c.tenor.com/JesErrtBhRsAAAAC/anime-blush.gif',
            'https://c.tenor.com/JhO1fYhvP14AAAAC/face-blush.gif',
            'https://c.tenor.com/99YrwNngxtsAAAAC/rikka-shy.gif',
            'https://c.tenor.com/QKuVXBYQ--sAAAAC/blushing-anime.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()
        
            .setAuthor(`${message.author.username} thinks that's lewd!!`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_blush[Math.floor(Math.random() * random_blush.length)])
            .setColor('#7d77df')
        message.channel.send(embed)
    }
}