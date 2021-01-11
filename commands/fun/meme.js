const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
module.exports = {
    name:'meme',
    description: "Gives the user a meme",
    run: async (bot, message, args) => {
        const img = await randomPuppy(random);
        const img2 = await randomPuppy(subreddit);

        if(!args[0]) {
            var subreddits = [
                "Animemes",
                "dankmemes",
                "goodanimemes",
                "goodanimememes",
                "memes",
                "wholesomememes",
                "wholesomeanimemes"
            ]
            const random = subreddits[Math.floor(Math.random() * subreddits.length)];

            var embed = new Discord.MessageEmbed()

            .setTitle(`From r/${random}`)
            .setImage(img)
            .setURL(`https://reddit.com/r/${random}/new`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'dank') {
            const subreddit = "dankmemes"

            const embed = new Discord.MessageEmbed()

            .setTitle(`From r/${subreddit}`)
            .setImage(img2)
            .setURL(`https://reddit.com/r/${subreddit}/new`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'memes' || args[0] == 'meme') {
            const subreddit = "memes"

            const embed = new Discord.MessageEmbed()

            .setTitle(`From r/${subreddit}`)
            .setImage(img2)
            .setURL(`https://reddit.com/r/${subreddit}/new`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'anime') {
            const subreddits = [
                "Animemes",
                "goodanimemes",
                "goodanimememes"
            ]
            const random = subreddits[Math.floor(Math.random() * subreddits.length)];

            const embed = new Discord.MessageEmbed()

            .setTitle(`From r/${random}`)
            .setImage(img)
            .setURL(`https://reddit.com/r/${random}/new`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'wholesome') {
            const subreddit = "wholesomememes"

            const embed = new Discord.MessageEmbed()

            .setTitle(`From r/${subreddit}`)
            .setImage(img2)
            .setURL(`https://reddit.com/r/${subreddit}/new`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'wholesomeanime' || args[0] == 'wanime') {
            const subreddit = "wholesomeanimemes"

            const embed = new Discord.MessageEmbed()

            .setTitle(`From r/${subreddit}`)
            .setImage(img2)
            .setURL(`https://reddit.com/r/${subreddit}/new`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}