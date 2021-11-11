const {prefix} = require('../../config.json')
module.exports = {
    name:'meme',
    description: "It sends a meme off of a random subreddit, those being: dankmemes, memes, meme, Animemes",
    usage: `${prefix}meme`,
    category: 'fun',
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        const reddit = require('reddit-fetch')
        const subreddits = ["dankmemes", "memes", "Animemes", "meme"]
        const subreddit = subreddits[Math.floor(Math.random() * (subreddits.length))]

        reddit({
            subreddit: `${subreddit}`,
            sort: 'new',
            allowNSFW: false,
            allowModPost: true,
            allowCrossPost: true,
            allowVideo: true
        }).then(post => {
            const embed = new Discord.MessageEmbed()

                .setTitle(post.title)
                .setImage(post.url)
                .setURL(`https://www.reddit.com/${post.permalink}`)
                .setFooter(`Posted in r/${subreddit} by u/${post.author}`, 'https://cdn.discordapp.com/emojis/697937639701086268.png?v=1')
                .setColor('#7d77df')
            message.channel.send(embed)
        }).catch(error => console.log(`Oops, something went wrong:\n${error}`))
    }
};