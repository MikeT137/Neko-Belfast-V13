const {prefix} = require('../../config.json')
module.exports = {
    name:'shota',
    description: "Just try it out, you\'ll see",
    usage: `${prefix}shota`,
    category: 'nsfw',
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        if(message.channel.nsfw) {
            const embed = new Discord.MessageEmbed()

                .setDescription(`Here you go, click [this](https://www.youtube.com/watch?v=dQw4w9WgXcQ) for shota hentai`)
                .setColor('#7d77df')
            message.channel.send(embed)
        }
        else {
            const embed = new Discord.MessageEmbed()

                .setAuthor('This isn\'t a nsfw channel, but even if it were, child pornography is illegal. MODS, LET\'S GET\'EM!', message.author.displayAvatarURL({ dynamic: true }))
                .setImage('https://thumbs.gfycat.com/ExcellentMediumBull-max-1mb.gif')
                .setColor('#7d77df')
            message.channel.send(embed)
        }
    }
}