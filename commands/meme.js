const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name:'meme',
    description: "The user is given a meme",
    run: async(message, argument) => {
        const subreddits = [
            "dankmemes",
            "memes",
            "Animemes",
            "wholesomememes",
            "wholesomeanimemes",
        ]
        const random = subreddits[Math.floor(Math.random() * subreddits.length)];
        const img = await randomPuppy(random);

        if(!argument[1]) {
            const embed = new Discord.MessageEmbed()

            .setTitle(`From r/${random}`)
            .setImage(img)
            .setURL(`htps://reddit.com/r/${random}`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}    