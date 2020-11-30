module.exports = {
    name:'hug',
    description: "Hugs a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_hug = [
            'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif',
            'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif',
            'https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif',
            'https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif',
            'https://66.media.tumblr.com/2a3ec53a742008eb61979af6b7148e8d/tumblr_mt1cllxlBr1s2tbc6o1_500.gif',
            'https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif',
            'https://media.giphy.com/media/DjczAlIcyK1Co/giphy.gif',
            'https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif',
            'https://media.tenor.com/images/2e1d34d002d73459b6119d57e6a795d6/tenor.gif',
            'https://cdn.weeb.sh/images/SJebhd1Ob.gif',
            'https://cdn.weeb.sh/images/SJZ-Qy35f.gif',
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                const embed = new Discord.MessageEmbed()
        
                .setAuthor(`Aww, its okay, belfast will give you some hugs nya~`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(random_hug[Math.floor(Math.random() * random_hug.length)])
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }else {
                const embed = new Discord.MessageEmbed()
        
                .setAuthor(`${message.author.username} gave ${person.username} a hug!`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(random_hug[Math.floor(Math.random() * random_hug.length)])
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to hug them')
        }
    }
}