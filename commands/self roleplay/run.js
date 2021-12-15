const {prefix} = require('../../config.json')
module.exports = {
    name: 'run',
    description: "It sends a running gif",
    usage: `${prefix}run`,
    category: 'self roleplay',
    run: async(bot, message, args) => {
        const Discord = require('discord.js');
        const random_run = [
            'https://c.tenor.com/mUIXigPWPuYAAAAM/anime-anime-girl-running.gif',
            'https://c.tenor.com/MMA6_WvqS60AAAAM/escape-im-out.gif',
            'https://c.tenor.com/am4tzoTsnRoAAAAM/ichigaya-arisa-bang-dream.gif',
            'https://c.tenor.com/fCNJ5gEgwEYAAAAM/naruto-anime.gif',
            'https://c.tenor.com/BF9yBwexIbMAAAAM/anime-run.gif',
            'https://c.tenor.com/PAOfog-IuSAAAAAM/anime-nezuko-kamado.gif',
            'https://c.tenor.com/Vuu21qfS4wcAAAAM/maki-natsuo-love-lab.gif',
            'https://c.tenor.com/G2YT33dvNjQAAAAM/anime.gif'
        ]
        message.delete();
        if(message.mentions.members.size >= 1 && person.id != message.author.id) {
            const embed = new Discord.MessageEmbed()
            
                .setAuthor(`${message.author.username} is running away from ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`${args.slice(1, args.length).join(' ')}`)
                .setImage(random_run[Math.floor(Math.random() * random_run.length)])
                .setColor('#7d77df')
            message.channel.send(embed);
        }else {
            const embed = new Discord.MessageEmbed()
            
                .setAuthor(`${message.author.username} is running away`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`${args.join(' ')}`)
                .setImage(random_run[Math.floor(Math.random() * random_run.length)])
                .setColor('#7d77df')
            message.channel.send(embed)
        }
    }
}