const {prefix} = require('../../config.json')
module.exports = {
    name:'sneeze',
    description: "It sends a sneezing gif",
    usage: `${prefix}sneeze`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_sneeze = [
            'https://i.pinimg.com/originals/15/87/dc/1587dc2aa98fdb2db4c1cf2c824e90bb.gif',
            'https://media.tenor.com/images/68d76e79a035e1846e6cf0e48c05b205/tenor.gif',
            'https://i.pinimg.com/originals/a7/b1/de/a7b1dea96babfd165922304333824ec2.gif',
            'https://i.gifer.com/o2P.gif',
            'https://media.tenor.com/images/67a0e173f879a860c667c751abb8221c/tenor.gif',
            'https://data.whicdn.com/images/323784913/original.gif',
            'https://www.icegif.com/wp-content/uploads/kenma-icegif-5.gif',
            'https://2.bp.blogspot.com/-E5mM8dvnFpQ/XFI10EYLJSI/AAAAAAABbpM/2FF5irF0WKsqu5JOFN2DMMtrjNhY9TBAwCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BFairy%2BTail%2BFinal%2BSeason%2B-%2BEpisode%2B293%2B-%2BBrandish%2BSneezes.gif',
            'https://64.media.tumblr.com/628b329d0a04c985b6a447ebf7097bbe/tumblr_n05mccLUxD1s8tvyzo1_500.gifv',
            'https://i.pinimg.com/originals/ee/99/b1/ee99b104e80d42692c6d471fe8872e30.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`Bless you, ${message.author.username}!`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_sneeze[Math.floor(Math.random() * random_sneeze.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}