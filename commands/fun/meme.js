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
                "Animemes",
                "wholesomememes",
                "wholesomeanimemes",
            ]
            const random = subreddits[Math.floor(Math.random() * subreddits.length)];
            const img = await randomPuppy(random);

            var embed = new Discord.MessageEmbed()

            .setTitle(`From r/${random}`)
            .setImage(img)
            .setURL(`https://reddit.com/r/${random}`)
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
            .setURL(`https://reddit.com/r/${random}`)
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
            .setURL(`https://reddit.com/r/${random}`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'anime') {
            const subreddits = [
                "Animemes",
            ]
            const random = subreddits[Math.floor(Math.random() * subreddits.length)];
            const img = await randomPuppy(random);

            const embed = new Discord.MessageEmbed()

            .setTitle(`From r/${random}`)
            .setImage(img)
            .setURL(`https://reddit.com/r/${random}`)
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
            .setURL(`https://reddit.com/r/${random}`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);

        }else if(args[0] == 'wholesomeanime') {
            const subreddits = [
                "wholesomeanimemes",
            ]
            const random = subreddits[Math.floor(Math.random() * subreddits.length)];
            const img = await randomPuppy(random);

            const embed = new Discord.MessageEmbed()

            .setTitle(`From r/${random}`)
            .setImage(img)
            .setURL(`https://reddit.com/r/${random}`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}