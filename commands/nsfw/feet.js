const {prefix} = require('../../config.json')
const {topggtoken} = require('../../config.json')
module.exports = {
    name:'feet',
    description: "It sends a nsfw gif about feet",
    usage: `${prefix}feet`,
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
                message.channel.send(`If you want to access nsfw commands, you have to vote for me. That\'s the only way that it can work nya~.\nHere\'s the link: https://top.gg/bot/727093236954431488/vote`)
             }else {
                async function feet() {
                    const image = await neko.nsfw.feet()
                    const gif = await neko.nsfw.feetGif()
                    let random_feet = [
                        image,
                        gif
                    ]
                    const GIF = random_feet[Math.floor(Math.random() * random_feet.length)]
                    const embed = new Discord.MessageEmbed()
                            
                        .setTitle(`A nsfw image/gif about: \`feet\``)
                        .setImage(GIF.url)
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }
                feet();
            }
        }else {
            message.channel.send(`${message.author.username} what are you doing?! This is not a nsfw channel nyaa!`)
        }
    }
}