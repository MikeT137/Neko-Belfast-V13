const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
module.exports = {
    name:'meme',
    description: "Gives the user a meme",
    run: async (bot, message, args) => {
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
            const img = await randomPuppy(random);

            var embed = new Discord.MessageEmbed()

                .setTitle(`From r/${random}`)
                .setImage(img)
                .setURL(`https://reddit.com/r/${random}/new`)
                .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'dank') {
            const subreddit = "dankmemes"
            const img = await randomPuppy(subreddit);

            const embed = new Discord.MessageEmbed()

                .setTitle(`From r/${subreddit}`)
                .setImage(img)
                .setURL(`https://reddit.com/r/${subreddit}/new`)
                .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'memes' || args[0] == 'meme') {
            const subreddit = "memes"
            const img = await randomPuppy(subreddit);

            const embed = new Discord.MessageEmbed()

                .setTitle(`From r/${subreddit}`)
                .setImage(img)
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
            const img = await randomPuppy(random);

            const embed = new Discord.MessageEmbed()

                .setTitle(`From r/${random}`)
                .setImage(img)
                .setURL(`https://reddit.com/r/${random}/new`)
                .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'wholesome') {
            const subreddit = "wholesomememes"
            const img = await randomPuppy(subreddit);

            const embed = new Discord.MessageEmbed()

                .setTitle(`From r/${subreddit}`)
                .setImage(img)
                .setURL(`https://reddit.com/r/${subreddit}/new`)
                .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'wholesomeanime' || args[0] == 'wanime') {
            const subreddit = "wholesomeanimemes"
            const img = await randomPuppy(subreddit);

            const embed = new Discord.MessageEmbed()

                .setTitle(`From r/${subreddit}`)
                .setImage(img)
                .setURL(`https://reddit.com/r/${subreddit}/new`)
                .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}