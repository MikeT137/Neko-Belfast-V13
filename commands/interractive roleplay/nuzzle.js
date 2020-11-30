module.exports = {
    name:'nuzzle',
    description: "Nuzzles a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_nuzzle = [
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
            if(person.id == message.author.id) {
                const embed = new Discord.MessageEmbed()

                .setAuthor(`Aww, its okay, belfast will give you some nuzzles nya~`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(random_nuzzle[Math.floor(Math.random() * random_nuzzle.length)])
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }else {
                const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} gave ${person.username} a nuzzle...so cute`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(random_nuzzle[Math.floor(Math.random() * random_nuzzle.length)])
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to nuzzle them')
        }
    }
}