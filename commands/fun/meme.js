const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
module.exports = {
    name:'meme',
    description: "Gives the user a meme",
    run: async (bot, message, args) => {
        const subreddits = [
            "dankmemes",
            "memes",
            "Animemes",
            "wholesomememes",
            "wholesomeanimemes",
        ]
        const random = subreddits[Math.floor(Math.random() * subreddits.length)];
        const img = await randomPuppy(random);

        if (!args[0]){
            const embed = new Discord.MessageEmbed()

            .setTitle(`From r/${random}`)
            .setImage(img)
            .setURL(`https://reddit.com/r/${random}`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);

        }
    }
}