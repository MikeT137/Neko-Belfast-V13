module.exports = {
    name: 'run',
    description: 'The user runs away',
    run: async(bot, message, args) => {
        const Discord = require('discord.js');
        const random_run = [
            'https://media.tenor.com/images/7a2ab7bd487ef2f0da1ec8d711c75acc/tenor.gif',
            'https://i.gifer.com/AEOb.gif',
            'https://i.pinimg.com/originals/c3/76/01/c376012492fdf168beb84037d74b2587.gif',
            'https://thumbs.gfycat.com/ImpureDismalEgret-size_restricted.gif',
            'https://media1.tenor.com/images/13c50d33f8e0ddb96c19cee308bc2067/tenor.gif?itemid=13964338',
            'https://cdn.myanimelist.net/s/common/uploaded_files/1460140429-d60a2b5a534becb71153db8eaaaf4e14.gif',
            'https://gifimage.net/wp-content/uploads/2017/10/naruto-run-gif-1.gif',
            'https://i.kym-cdn.com/photos/images/original/001/081/817/909.gif',
            'https://media.giphy.com/media/CRWdhM1XgJ7Pi/giphy.gif',
            'https://thumbs.gfycat.com/WealthyAgedAlligatorsnappingturtle-size_restricted.gif',
        ]
        if (!args[0]){
            const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is running away`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(random_run[Math.floor(Math.random() * random_run.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}