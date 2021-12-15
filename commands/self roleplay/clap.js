const {prefix} = require('../../config.json')
module.exports = {
    name:'clap',
    description: "It sends a clapping gif",
    usage: `${prefix}clap`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_clap = [
            'https://c.tenor.com/2RMlQdkpG1cAAAAC/clapping-anime.gif',
            'https://c.tenor.com/xdj7XE8llU8AAAAM/nekopara-clap.gif',
            'https://c.tenor.com/zVvMxtmpRaMAAAAM/taiga-asaka-clapping.gif',
            'https://c.tenor.com/gcqIuGc-xWwAAAAM/bravo-applause.gif',
            'https://c.tenor.com/tyb15RWixEYAAAAM/puck-anime.gif',
            'https://c.tenor.com/jncqY9-RbqcAAAAM/mushoku-tensei-roxy.gif',
            'https://c.tenor.com/Qxx4rucquegAAAAM/anime-animeclap.gif',
            'https://c.tenor.com/-CYB_M99hX4AAAAM/clap-hand-clapping.gif',
            'https://c.tenor.com/c_vZzvw614QAAAAM/anime-clapping.gif',
            'https://c.tenor.com/yOYozX46P2kAAAAM/clap-anime.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} claps their hands`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_clap[Math.floor(Math.random() * random_clap.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}