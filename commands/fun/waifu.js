const {prefix} = require('../../config.json')
module.exports = {
    name:'waifu',
    description: "It sends image of a waifu",
    usage: `${prefix}waifu`,
    category: 'fun',
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        const nekoclient = require('nekos.life');
        const neko = new nekoclient();

        async function waifu() {
            const GIF = await neko.sfw.waifu();
            const embed = new Discord.MessageEmbed()
                            
                .setTitle(`Here\'s an image of a waifu`)
                .setImage(GIF.url)
                .setColor('#7d77df')
            message.channel.send(embed);
        }
        waifu();
    }
}