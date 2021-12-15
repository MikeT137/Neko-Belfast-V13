const {prefix} = require('../../config.json')
module.exports = {
    name:'sip',
    description: "It sends a sipping gif",
    usage: `${prefix}sip`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_sip = [
            'https://c.tenor.com/dXeGgnB4u_sAAAAM/dragon-woman-anime.gif',
            'https://c.tenor.com/6MsUKfeMoIoAAAAM/tokki-sip.gif',
            'https://c.tenor.com/6lW7zc04DVAAAAAM/lolia-sip-juice.gif',
            'https://c.tenor.com/pBkwu0RP5cEAAAAM/drink-hyouka.gif',
            'https://c.tenor.com/l0BUi2grxtgAAAAM/tea-time-tea.gif',
            'https://c.tenor.com/ecR-CbFWx6UAAAAM/anime-sip.gif',
            'https://c.tenor.com/Nn4ydcdsdbEAAAAM/manga-rascal-does-not-dream-of-bunny-girl-senpai.gif',
            'https://c.tenor.com/O9nE09LWTPMAAAAM/drink-anime.gif',
            'https://c.tenor.com/RJ9qC27CvCEAAAAM/giorno-tea.gif',
            'https://c.tenor.com/xsy1eMSNR6QAAAAM/minamike-chiaki-minami.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is sipping from a cup of tea`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_sip[Math.floor(Math.random() * random_sip.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}