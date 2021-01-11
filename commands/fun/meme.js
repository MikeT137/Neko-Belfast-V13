const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
module.exports = {
    name:'meme',
    description: "Gives the user a meme",
    run: async (bot, message, args) => {
        if(!args[0]) {
            const subreddits = [
                "dankmemes",
                "goodanimemes",
                "memes",
                "wholesomememes",
                "wholesomeanimemes",
            ]
            const random = subreddits[Math.floor(Math.random() * subreddits.length)];
            const img = await randomPuppy(random);

            const embed = new Discord.MessageEmbed()

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

            const embed = new Discord.MessageEmbed()

                .setTitle(`From r/${random}`)
                .setImage(img)
                .setURL(`https://reddit.com/r/${random}/new`)
                .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'memes' || args[0] == 'meme') {
            const subreddit = [
                "memes",
            ]
            const random = subreddit[Math.floor(Math.random() * subreddit.length)];
            const img = await randomPuppy(random);

            const embed = new Discord.MessageEmbed()

                .setTitle(`From r/${random}`)
                .setImage(img)
                .setURL(`https://reddit.com/r/${random}/new`)
                .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'anime') {
            const subreddit = [
                "goodanimemes",
            ]
            const random = subreddit[Math.floor(Math.random() * subreddit.length)];
            const img = await randomPuppy(random);

            const embed = new Discord.MessageEmbed()

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

            const embed = new Discord.MessageEmbed()

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

            const embed = new Discord.MessageEmbed()

                .setTitle(`From r/${random}`)
                .setImage(img)
                .setURL(`https://reddit.com/r/${random}/new`)
                .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}