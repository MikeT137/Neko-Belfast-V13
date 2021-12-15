const {prefix} = require('../../config.json')
module.exports = {
    name: 'shrug',
    description: "It sends a shrugging gif",
    usage: `${prefix}shrug`,
    category: 'self roleplay',
    run: async(bot, message, args) => {
        const Discord = require('discord.js');
        const random_shrug = [
            'https://c.tenor.com/0GOwPHgcUj0AAAAM/anime-shrug.gif',
            'https://c.tenor.com/ZaxUeXcUtDkAAAAM/shrug-smug.gif',
            'https://c.tenor.com/F6ekeSqr9OsAAAAM/renge-shrug.gif',
            'https://c.tenor.com/SxvUPdLQfrgAAAAM/uzaki-chan-uzaki.gif',
            'https://c.tenor.com/zxLvtngh-M4AAAAM/kakegurui-anime.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} shrugs ¯\\_(ツ)_/¯`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_shrug[Math.floor(Math.random() * random_shrug.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}