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
            .setDescription(`${meme.upvoteRatio}% of people have liked this. Posted by u/**${meme.author}**`)
            .setImage(meme.img)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor(0x4AEFBA)
        message.channel.send(embed);
    }
}