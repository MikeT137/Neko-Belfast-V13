module.exports = {
    name:'meme',
    description: "Gives the user a meme",
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        const api = require('imageapi.js')
        const subreddits = ["dankmemes", "goodanimemes", "memes", "meme"]
        const subreddit = subreddits[Math.floor(Math.random() * (subreddits.length))]
        const meme = await api.advanced(subreddit)

        const embed = new Discord.MessageEmbed()

            .setTitle(`r/${subreddit}`)
            .setDescription(`${meme.upvoteRatio}% of people have liked this :thumbsup:`)
            .setImage(meme.img)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setFooter(`Posted by u/${meme.author}`)
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}