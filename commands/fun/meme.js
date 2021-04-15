const {prefix} = require('../../config.json')
module.exports = {
    name:'meme',
    description: "It sends a meme off of a random subreddit, those being: dankmemes, memes, meme, Animemes, goodanimemes",
    usage: `${prefix}meme`,
    category: 'fun',
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        const api = require('imageapi.js')
        const subreddits = ["dankmemes", "goodanimemes", "memes", 'Animemes', "meme"]
        const subreddit = subreddits[Math.floor(Math.random() * (subreddits.length))]
        const meme = await api.advanced(subreddit)
        
        const embed = new Discord.MessageEmbed()

            .setTitle(meme.title)
            .setDescription(`${meme.upvoteRatio}% of people have liked this :thumbsup:`)
            .setImage(meme.img)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setFooter(`Posted in r/${subreddit} by u/${meme.author}`)
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}