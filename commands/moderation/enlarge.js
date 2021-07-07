const {prefix} = require('../../config.json')
module.exports = {
    name:'enlarge',
    description: "It sends a bigger version of an emoji",
    usage: `${prefix}enlarge emoji`,
    category: 'moderation',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const { parse } = require("twemoji-parser");
        const emoji = args[0];
        const custom = Discord.Util.parseEmoji(emoji);

        if (!emoji) {
            message.channel.send("No emoji provided!");
        }
        if (custom.id) {
            const embed = new Discord.MessageEmbed()
        
                .setAuthor(`Enlarged version of ${emoji}`, message.author.displayAvatarURL({ dynamic: true }))
                .setColor('#7d77df')
                .setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`);
            message.channel.send(embed);
        }
        else {
            let parsed = parse(emoji, { assetType: "png" });

            if (!parsed[0]) {
                message.channel.send("Invalid emoji!");
            }else {
                const embed = new Discord.MessageEmbed()

                    .setColor('#7d77df')
                    .setImage(parsed[0].url);
                message.channel.send(embed);
            }
        }
    }
}