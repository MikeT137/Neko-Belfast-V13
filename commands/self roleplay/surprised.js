const {prefix} = require('../../config.json')
module.exports = {
    name:'surprised',
    description: "It sends a surprising gif",
    usage: `${prefix}surprised`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_shock = [
            'https://c.tenor.com/L7lM5bXyDEQAAAAM/konobi-anime.gif',
            'https://c.tenor.com/n7c5jw31piEAAAAM/watashi-nouryoku-mile.gif',
            'https://c.tenor.com/8q6Jwj0as2wAAAAM/killua-huh.gif',
            'https://c.tenor.com/0gwoVD1Q6GQAAAAM/kaguya-shocked.gif',
            'https://c.tenor.com/2AasysG6vcYAAAAM/sparkly-eye-anime.gif',
            'https://c.tenor.com/pipTejvOiGUAAAAM/nichijou-anime.gif',
            'https://c.tenor.com/v-KH_PCNm8sAAAAM/shock-anime.gif',
            'https://c.tenor.com/Omxp9PMNzKgAAAAM/anime-surprised-anime.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is surprised`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_shock[Math.floor(Math.random() * random_shock.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}