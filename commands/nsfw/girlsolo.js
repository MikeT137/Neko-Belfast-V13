const {prefix} = require('../../config.json')
const {topggtoken} = require('../../config.json')
module.exports = {
    name:'solo',
    description: "It sends a nsfw gif about girlsolo",
    usage: `${prefix}solo`,
    category: 'nsfw',
    run: async (bot, message, args) => {
        if(message.channel.nsfw) {
            const Discord = require('discord.js')
            const nekoclient = require('nekos.life');
            const neko = new nekoclient();
            const Topgg = require('@top-gg/sdk')
            const topgg = new Topgg.Api(topggtoken)

            let voted = await topgg.hasVoted(message.author.id)
            if(!voted) {
                message.channel.send(`If you want to access nsfw commands, you have to vote for me once every 12 hours. That\'s the only way that it can work nya~.\nHere\'s the link: https://top.gg/bot/727093236954431488/vote`)
             }else {
                async function girlsolo() {
                    const image = await neko.nsfw.girlSolo()
                    const gif = await neko.nsfw.girlSoloGif()
                    let random_solo = [
                        image,
                        gif
                    ]
                    const GIF = random_solo[Math.floor(Math.random() * random_solo.length)]
                    const embed = new Discord.MessageEmbed()
                            
                        .setTitle(`A nsfw image/gif about: \`girlsolo\``)
                        .setImage(GIF.url)
                        .setFooter('Image/Gif taken from nekos.life', 'https://avatars.githubusercontent.com/u/34457007?s=200&v=4')
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }
                girlsolo();
            }
        }else {
            message.channel.send(`${message.author.username} what are you doing?! This is not a nsfw channel nyaa!`)
        }
    }
}