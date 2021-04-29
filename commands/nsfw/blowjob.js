const {prefix} = require('../../config.json')
const {topggtoken} = require('../../config.json')
module.exports = {
    name:'blowjob',
    description: "It sends a nsfw gif about blowjob",
    usage: `${prefix}blowjob`,
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
                async function blowjob() {
                    const GIF = await neko.nsfw.bJ();
                    const embed = new Discord.MessageEmbed()
                            
                        .setTitle(`A nsfw image/gif about: \`blowjob\``)
                        .setImage(GIF.url)
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }
                blowjob();
            }
        }else {
            message.channel.send(`${message.author.username} what are you doing?! This is not a nsfw channel nyaa!`)
        }
    }
}