const {prefix} = require('../../config.json')
module.exports = {
    name:'nap',
    description: "It sends a napping gif",
    usage: `${prefix}nap`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_nap = [
            'https://c.tenor.com/0i6HB03LuE4AAAAM/anime-sleeping.gif',
            'https://i.pinimg.com/originals/81/79/b5/8179b530237c2c657e2b17bd4b00c02e.gif',
            'https://acegif.com/wp-content/gif/anime-sleep-81.gif',
            'https://c.tenor.com/jC1gv_i4N5IAAAAM/raphtalia-best-girl.gif',
            'https://c.tenor.com/HItBOocy6ikAAAAM/umaru-sleeping.gif',
            'https://i.pinimg.com/originals/00/50/a3/0050a3ea00bd58c0901c49ff24e36699.gif',
            'https://acegif.com/wp-content/gif/anime-sleep-1.gif',
            'https://image.myanimelist.net/ui/_3fYL8i6Q-n-155t3dn_4oa8joxN4d65hmFMp22bNTIUW3ufQExKZv-GKL4AdqgU',
            'https://imgur.com/PKys6GG',
            'https://pa1.narvii.com/5736/545fb89f5c64c4a1722d4c76261f91e9b859a1a0_hq.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()
        
            .setAuthor(`${message.author.username} is napping, sweet dreams!`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_dab[Math.floor(Math.random() * random_nap.length)])
            .setColor('#7d77df')
        message.channel.send(embed)
    }
}