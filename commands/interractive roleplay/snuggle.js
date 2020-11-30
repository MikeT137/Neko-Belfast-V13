module.exports = {
    name:'snuggle',
    description: "Snuggles a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_snuggle = [
            'https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif',
            'https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif',
            'https://media.giphy.com/media/eMpDBxxTzKety/giphy.gif',
            'https://media.giphy.com/media/GMFUrC8E8aWoo/giphy.gif',
            'https://media.giphy.com/media/3bqtLDeiDtwhq/giphy.gif',
            'https://media.giphy.com/media/nUz7d1sUppGta/giphy.gif',
            'https://media.giphy.com/media/EGauSkKQZuXxS/giphy.gif',
            'https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif',
            'https://mrwgifs.com/wp-content/uploads/2013/04/Snuggling-Cuddling-Anime-Girls-Gif-.gif',
            'https://thumbs.gfycat.com/ShowyObedientCrane-max-1mb.gif',
        ]
        if(message.mentions.members.size >= 1) {
            const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} gave ${person.username} a snuggle...so cute`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(random_snuggle[Math.floor(Math.random() * random_snuggle.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}