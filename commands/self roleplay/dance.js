const {prefix} = require('../../config.json')
module.exports = {
    name:'dance',
    description: "It sends a dancing gif",
    usage: `${prefix}dance`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_dance = [
            'https://c.tenor.com/ZcjgRe9DltkAAAAM/rosu.gif',
            'https://c.tenor.com/2vRn7mgoMRMAAAAM/cute-anime-dance.gif',
            'https://c.tenor.com/15NLF1281h8AAAAM/anime-dance.gif',
            'https://c.tenor.com/TVFrC38WTRQAAAAM/celebrate-shinkoukei.gif',
            'https://c.tenor.com/mKTS5nbF1zcAAAAM/cute-anime-dancing.gif',
            'https://c.tenor.com/llIEL86XtLYAAAAM/dance-durarara.gif',
            'https://c.tenor.com/DJRIqCgNJCIAAAAM/anime-dance.gif',
            'https://c.tenor.com/VT-X83Ou9PUAAAAM/anime-happy.gif',
            'https://c.tenor.com/NK9mNOlVW4kAAAAM/anime-dance.gif',
            'https://c.tenor.com/R6kJb2Ny9YIAAAAM/funny-anime-dancing.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is having fun`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_dance[Math.floor(Math.random() * random_dance.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}