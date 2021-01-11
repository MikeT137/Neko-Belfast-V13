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
                "wholesomeanimemes",
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
            const subreddit = [
                "dankmemes",
            ]
            const random = subreddit[Math.floor(Math.random() * subreddit.length)];
            const img = await randomPuppy(random);

            var embed = new Discord.MessageEmbed()

                .setTitle(`From r/${random}`)
                .setImage(img)
                .setURL(`https://reddit.com/r/${random}/new`)
                .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'memes') {
            const subreddit = [
                "memes",
            ]
            const random = subreddit[Math.floor(Math.random() * subreddit.length)];
            const img = await randomPuppy(random);

            var embed = new Discord.MessageEmbed()

                .setTitle(`From r/${random}`)
                .setImage(img)
                .setURL(`https://reddit.com/r/${random}/new`)
                .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'anime') {
            var subreddits = [
                "Animemes",
                "goodanimemes",
                "goodanimememes",
            ]
            const random = subreddits[Math.floor(Math.random() * subreddits.length)];
            const img = await randomPuppy(random);

            var embed = new Discord.MessageEmbed()

                .setTitle(`From r/${random}`)
                .setImage(img)
                .setURL(`https://reddit.com/r/${random}/new`)
                .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'wholesome') {
            const subreddit = [
                "wholesomememes",
            ]
            const random = subreddit[Math.floor(Math.random() * subreddit.length)];
            const img = await randomPuppy(random);

            var embed = new Discord.MessageEmbed()

                .setTitle(`From r/${random}`)
                .setImage(img)
                .setURL(`https://reddit.com/r/${random}/new`)
                .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'wholesomeanime' || args[0] == 'wanime') {
            const subreddit = [
                "wholesomeanimemes",
            ]
            const random = subreddit[Math.floor(Math.random() * subreddit.length)];
            const img = await randomPuppy(random);

            var embed = new Discord.MessageEmbed()

                .setTitle(`From r/${random}`)
                .setImage(img)
                .setURL(`https://reddit.com/r/${random}/new`)
                .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}