const {prefix} = require('../../config.json')
module.exports = {
    name:'pout',
    description: "It sends a pouting gif",
    usage: `${prefix}pout`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_pout = [
            'https://c.tenor.com/yCR6JOoxS6wAAAAM/anime-angry.gif',
            'https://c.tenor.com/hR8XdCeC2psAAAAM/cute-pouting.gif',
            'https://c.tenor.com/iNu8LXx2ECgAAAAM/senko-poute-hmph.gif',
            'https://c.tenor.com/A70scThth6MAAAAM/angry-pouting.gif',
            'https://c.tenor.com/VidlGXLXk3gAAAAM/anime-girl.gif',
            'https://c.tenor.com/3EgO4ozQzp4AAAAM/anime-raphtalia.gif',
            'https://c.tenor.com/p4vHR4zM_u0AAAAM/anime-tsundere.gif',
            'https://c.tenor.com/Ln-j0vBojk0AAAAM/pouty-anime.gif',
            'https://c.tenor.com/TxOLuusc9LIAAAAM/pout-hmph.gif',
            'https://c.tenor.com/0KZUMuXbDbYAAAAM/pouty-anime.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is pouting, such a tsundere`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_pout[Math.floor(Math.random() * random_pout.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}