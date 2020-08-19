const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
module.exports = {
    name:'meme',
    description: "Gives the user a meme",
    run: async (bot, message, args) => {
        if(!args[0]) {
            var subreddits = [
                "dankmemes",
                "memes",
                "goodanimemes",
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
            const subreddits = [
                "dankmemes",
            ]
            const random = subreddits[Math.floor(Math.random() * subreddits.length)];
            const img = await randomPuppy(random);

            const embed = new Discord.MessageEmbed()

            .setTitle(`From r/${random}`)
            .setImage(img)
            .setURL(`https://reddit.com/r/${random}/new`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'memes') {
            const subreddits = [
                "memes",
            ]
            const random = subreddits[Math.floor(Math.random() * subreddits.length)];
            const img = await randomPuppy(random);

            const embed = new Discord.MessageEmbed()

            .setTitle(`From r/${random}`)
            .setImage(img)
            .setURL(`https://reddit.com/r/${random}/new`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'anime') {
            const subreddits = [
                "goodanimemes",
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
            const subreddits = [
                "wholesomememes",
            ]
            const random = subreddits[Math.floor(Math.random() * subreddits.length)];
            const img = await randomPuppy(random);

            const embed = new Discord.MessageEmbed()

            .setTitle(`From r/${random}`)
            .setImage(img)
            .setURL(`https://reddit.com/r/${random}/new`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'wholesomeanime' || args[0] == 'wanime') {
            const subreddits = [
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
        }
    }
}