const {prefix} = require('../../config.json')
const {topggtoken} = require('../../config.json')
module.exports = {
    name:'monstergirl',
    description: "It sends a nsfw image about monster girls",
    usage: `${prefix}monstergirl`,
    category: 'nsfw',
    run: async (bot, message, args) => {
        if(message.channel.nsfw) {
            const Discord = require('discord.js')
            const Topgg = require('@top-gg/sdk')
            const topgg = new Topgg.Api(topggtoken)
            const reddit = require('reddit-fetch')
            let voted = await topgg.hasVoted(message.author.id)
            
            if(message.author.id == '486276124549316619') {
                reddit({
                    subreddit: "Monstergirl",
                    sort: 'new',
                    allowNSFW: true,
                    allowModPost: true,
                    allowCrossPost: true,
                    allowVideo: true
                }).then(post => {
                    message.delete();
                    const embed = new Discord.MessageEmbed()

                        .setTitle(post.title)
                        .setImage(post.url)
                        .setURL(`https://www.reddit.com/${post.permalink}`)
                        .setFooter(`Posted in r/Monstergirl`, 'https://cdn.discordapp.com/emojis/697937639701086268.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embed)
                }).catch(error => console.log(`Oops, something went wrong:\n${error}`))
            }else if(!voted) {
                message.channel.send(`If you want to access nsfw commands, you have to vote for me once every 12 hours. That\'s the only way that it can work nya~.\nHere\'s the link: https://top.gg/bot/727093236954431488/vote`)
            }else {
                reddit({
                    subreddit: "Monstergirl",
                    sort: 'new',
                    allowNSFW: true,
                    allowModPost: true,
                    allowCrossPost: true,
                    allowVideo: true
                }).then(post => {
                    message.delete();
                    const embed = new Discord.MessageEmbed()

                        .setTitle(post.title)
                        .setImage(post.url)
                        .setURL(`https://www.reddit.com/${post.permalink}`)
                        .setFooter(`Posted in r/Monstergirl`, 'https://cdn.discordapp.com/emojis/697937639701086268.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embed)
                }).catch(error => console.log(`Oops, something went wrong:\n${error}`))
            }
        }else {
            message.channel.send(`${message.author.username} what are you doing?! This is not a nsfw channel nyaa!`)
        }
    }
}