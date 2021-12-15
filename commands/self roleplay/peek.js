const {prefix} = require('../../config.json')
module.exports = {
    name: 'peek',
    description: "It sends a peeking gif",
    usage: `${prefix}peek`,
    category: 'self roleplay',
    run: async(bot, message, args) => {
        const Discord = require('discord.js');
        const random_peek = [
            'https://c.tenor.com/4G90ufIvHccAAAAC/anime-lurk.gif',
            'https://c.tenor.com/aWri_CbxeREAAAAC/momokuri-anime-lurk.gif',
            'https://c.tenor.com/O5URZERslMgAAAAM/katarina-claes-hiding.gif',
            'https://c.tenor.com/vgYj0v3_A0kAAAAM/anime-peek.gif',
            'https://thumbs.gfycat.com/AcademicSociableAgouti-size_restricted.gif',
            'https://i.kym-cdn.com/photos/images/original/000/707/143/60b.gif',
            'https://c.tenor.com/t1KZ9IeCxpEAAAAM/junkolurk.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is peeking`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_peek[Math.floor(Math.random() * random_peek.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}