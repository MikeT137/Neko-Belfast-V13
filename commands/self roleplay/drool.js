const {prefix} = require('../../config.json')
module.exports = {
    name:'drool',
    description: "It sends a drooling gif",
    usage: `${prefix}drool`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_drool = [
            'https://c.tenor.com/Q7tpTHwgTkoAAAAM/hungry-starving.gif',
            'https://c.tenor.com/b4ZffBO1UJQAAAAM/drool-anime.gif',
            'https://c.tenor.com/-14imqUfGxwAAAAM/suteki-shimoneta.gif',
            'https://c.tenor.com/yJv30jchZCkAAAAM/moist-drool.gif',
            'https://c.tenor.com/uVWf5krTa_EAAAAM/jahy-sama-jahy.gif',
            'https://c.tenor.com/IfK7uRjO7EAAAAAM/sword-art-online-anime.gif',
            'https://c.tenor.com/aA7OPQ8eSOUAAAAM/drool-anime.gif',
            'https://c.tenor.com/V3h2Qme-2RkAAAAM/anime-aho-girl.gif',
            'https://c.tenor.com/eh7xePTe-UMAAAAM/anime-nyaruko.gif',
            'https://c.tenor.com/ejAhgqxjNK8AAAAM/kuuko-cthuko.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is drooling`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_drool[Math.floor(Math.random() * random_drool.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}