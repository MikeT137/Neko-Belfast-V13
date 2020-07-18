module.exports = {
    name:'hug',
    description: "Hugs a user",
    execute(message, argument){
        const Discord = require('discord.js');
        const author = message.author;
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
            'https://acegif.com/wp-content/uploads/anime-hug.gif',
            'https://media.tenor.com/images/2e1d34d002d73459b6119d57e6a795d6/tenor.gif',
            'https://cdn.weeb.sh/images/S1a0DJhqG.gif',
            'https://thumbs.gfycat.com/GlaringIllegalKoodoo-small.gif',
            'https://cdn.weeb.sh/images/SJebhd1Ob.gif',
            'https://cdn.weeb.sh/images/SJZ-Qy35f.gif',
            'https://giffiles.alphacoders.com/172/172308.gif',
        ]
        if(argument [1] == author) {
            const embed = new Discord.MessageEmbed()

            .setTitle(`Awww, dont worry ${author.username}, ill give you a hug!`)
            .setImage(random_hug[Math.floor(Math.random() * random_hug.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }else if(message.mentions.members.size >= 1) {
            const embed = new Discord.MessageEmbed()
    
            .setTitle(`${author.username} gave ${person.username} a hug!`)
            .setImage(random_hug[Math.floor(Math.random() * random_hug.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}