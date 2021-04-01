module.exports = {
    name:'hentai',
    description: "hentai image",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
    	const neko = require('nekos.life');
    	const gif = new neko();

        if (message.channel.nsfw) {
            const embed = new Discord.MessageEmbed()

                .setAuthor(`- Hentai`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(gif.nsfw.randomHentaiGif())
                .setColor('#7d77df')
            message.channel.send(embed);
        } else {
            message.channel.send("NYAA! Master what are you doing? This is not the right place >///<");
        }
    }
}
