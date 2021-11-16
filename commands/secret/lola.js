const {prefix} = require('../../config.json')
module.exports = {
    name: 'lola',
    description: 'Love message for bunny girlfriend lola <3',
    usage: `${prefix}lola`,
    category: 'secret',
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        const gif = [
            'https://c.tenor.com/YKd-wOisWB0AAAAC/anime-kiss.gif',
            'https://c.tenor.com/dJU8aKmPKAgAAAAM/anime-kiss.gif',
            'https://www.icegif.com/wp-content/uploads/anime-kiss-icegif-1.gif',
            'https://giphy.com/gifs/love-animation-kiss-bGm9FuBCGg4SY',
            'https://i.gifer.com/8Sbz.gif',
            'https://c.tenor.com/WijnhV9LiWAAAAAC/anime-kiss.gif',
            'https://64.media.tumblr.com/7bbfd33feb6d790bb656779a05ee99da/tumblr_mtigwpZmhh1si4l9vo1_500.gif',
            'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
            'https://i.imgur.com/sZhtvBR.gif',
            'https://c.tenor.com/SqpFZQfcyEgAAAAM/anime-kiss.gif'
        ]

        if(message.author.id == '486276124549316619' || message.author.id == '387156726060810250') {
            const embed = new Discord.MessageEmbed()
    
                .setAuthor(`Hey babe, hope you like this exclusive command i made for ya. Youre very nice with me, kind, i look up to you a lot given to how smart you are (also hot as hell), and i couldnt ask for more. Love you lots`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(gif[Math.floor(Math.random() * gif.length)])
                .setColor('#7d77df')
            message.channel.send(embed)
        }
    }
}