module.exports = {
    name:'neko',
    description: "neko hentai image",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const fetch = require("node-fetch");
        const url = 'https://cdn.nekos.life/nsfw_neko_gif';

        fetch(url, {
            method: 'GET'
        }).then((res) =>
            res.json()
        ).then((json) => {
            if (message.channel.nsfw) {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`- Neko`, message.author.displayAvatarURL({ dynamic: true }))
                    .setImage(json.url)
                    .setColor('#7d77df')
                message.channel.send(embed);
            } else {
                message.channel.send("NYAA! Master what are you doing? This is not the right place >///<");
            }
        })
    }
}
