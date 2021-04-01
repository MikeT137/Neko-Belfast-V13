module.exports = {
    name:'hentai',
    description: "hentai image",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
    	const NSFW = require("discord-nsfw");
        const nsfw = new NSFW();
        const hentai = [
            nsfw.hentai(),
            nsfw.hentaiass(),
            nsfw.hmidriff(),
            nsfw.hentaithigh()
        ]
        const image = hentai[Math.floor(Math.random() * hentai.length)];

        if (message.channel.nsfw) {
            const embed = new Discord.MessageEmbed()

                .setAuthor(`- Hentai`, message.author.displayAvatarURL({ dynamic: true }))
                .setURL(`${image}`)
                .setColor('#7d77df')
            message.channel.send(embed);
        } else {
            message.channel.send("NYAA! Master what are you doing? This is not the right place >///<");
        }
    }
}
