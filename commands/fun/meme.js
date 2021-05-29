const {prefix} = require('../../config.json')
module.exports = {
    name:'meme',
    description: "It sends a meme off of a random subreddit, those being: dankmemes, memes, meme, Animemes",
    usage: `${prefix}meme`,
    category: 'fun',
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        const api = require('imageapi.js')
        const subreddits = ["dankmemes", "memes", 'Animemes', "meme"]
        const subreddit = subreddits[Math.floor(Math.random() * (subreddits.length))]
        const meme = await api.advanced(subreddit)
        
        const embed = new Discord.MessageEmbed()

            .setTitle(meme.title)
            .setDescription(`Upvotes: ${meme.upvotes}\nComments: ${meme.comments}`)
            .setImage(meme.img)
            .setFooter(`Posted in r/${subreddit} by u/${meme.author}`, 'https://cdn.discordapp.com/emojis/697937639701086268.png?v=1')
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}