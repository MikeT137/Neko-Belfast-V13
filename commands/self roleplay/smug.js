const {prefix} = require('../../config.json')
module.exports = {
    name:'smug',
    description: "It sends a smugging gif",
    usage: `${prefix}smug`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_smug = [
            'https://c.tenor.com/LzUPgX7KmzsAAAAM/anime-smirk.gif',
            'https://c.tenor.com/5jO3pe9ZPPgAAAAM/smug-anime.gif',
            'https://c.tenor.com/__RVtv4ugQEAAAAM/anime-smug.gif',
            'https://c.tenor.com/r5FaioJeSA8AAAAM/wataten-cute.gif',
            'https://c.tenor.com/nv-cyj6efWsAAAAM/smug-anime.gif',
            'https://c.tenor.com/EHIkianDEOEAAAAM/hayase-nagatoro-smug-nagatoro-smug.gif',
            'https://c.tenor.com/io_R8mA_oUgAAAAM/satania-anime.gif',
            'https://c.tenor.com/rcDotvVDRK4AAAAM/smug-kurumi-ebisuzawa.gif',
            'https://c.tenor.com/5xa8xEczo8wAAAAM/homura-chika.gif',
            'https://c.tenor.com/7IAsg3UyMDsAAAAM/hideri-kanzaki-burried.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} smugs, hehe`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_smug[Math.floor(Math.random() * random_smug.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}