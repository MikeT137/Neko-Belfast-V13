const {prefix} = require('../../config.json')
module.exports = {
    name:'wave',
    description: "It sends a waving gif",
    usage: `${prefix}wave`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_wave = [
            'https://c.tenor.com/_Exw4V_izbkAAAAM/cute-anime.gif',
            'https://c.tenor.com/dessgik7ovcAAAAM/anime-wave.gif',
            'https://c.tenor.com/2yC5Fpjrh88AAAAM/hello-waving.gif',
            'https://c.tenor.com/eeyZsVwZScsAAAAM/anime-wave.gif',
            'https://c.tenor.com/Hntke7HWHhIAAAAM/wave-anime.gif',
            'https://c.tenor.com/BfOaQrPTl4YAAAAM/wataten-watashi-ni-tenshi-ga-maiorita.gif',
            'https://c.tenor.com/VhTQ5LRVVQ8AAAAM/anime-hi.gif',
            'https://c.tenor.com/svW4PXq7zDYAAAAM/nanami-waving.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is waving their hand!`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_wave[Math.floor(Math.random() * random_wave.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}