const {prefix} = require('../../config.json')
const {topggtoken} = require('../../config.json')
module.exports = {
    name:'boobs',
    description: "It sends a nsfw gif about boobs",
    usage: `${prefix}boobs`,
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
                async function boobs() {
                    const image = await neko.nsfw.boobs()
                    const image2 = await neko.nsfw.tits()
                    let random_boobs = [
                        image,
                        image2
                    ]
                    const GIF = random_boobs[Math.floor(Math.random() * random_boobs.length)]
                    const embed = new Discord.MessageEmbed()
                            
                        .setTitle(`A nsfw image/gif about: \`boobs\``)
                        .setImage(GIF.url)
                        .setFooter('Image/Gif taken from nekos.life', 'https://avatars.githubusercontent.com/u/34457007?s=200&v=4')
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }
                boobs();
            }
        }else {
            message.channel.send(`${message.author.username} what are you doing?! This is not a nsfw channel nyaa!`)
        }
    }
}