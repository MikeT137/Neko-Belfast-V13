module.exports = {
    name:'huh',
    description: "The user becomes confused",
    run: async (bot, message, args) => {
        const author = message.author;
        const Discord = require('discord.js');
        const random_huh = [
            'https://media.tenor.com/images/a1baeaac51a9cdc7c2ef69976fb8a7f0/tenor.gif',
            'https://media.tenor.com/images/fa93d52d6f767bbab36dc88ebe86b0fc/tenor.gif',
            'https://i.pinimg.com/originals/e7/65/e0/e765e06eb21f7bdd41eb6605222c4f60.gif',
            'https://i.imgur.com/xTY4jyk.gif',
            'https://lh3.googleusercontent.com/proxy/x62tN9__7-Ey3DTY11i3YYm0tdxsOhq7YikljVLecPwpSin1Y-YnEaP6JfvbHxRMwUZd1RetMytkdKXJB0A-E-UCjesXoEaQUkTYVZR7RzwXeDjzUGgzJlNG4JAyuZ-62A',
            'https://i.pinimg.com/originals/d4/e2/57/d4e257f00eb0fc36143248863c9f5a3a.gif',
            'https://media.tenor.com/images/7cf66d6f2cc28cb83c944f7217cf25b2/tenor.gif',
            'https://media3.giphy.com/media/fmXgCpO3IhesE/source.gif',
            'https://thumbs.gfycat.com/SoggyBlindKiwi-size_restricted.gif',
            'https://cdn140.picsart.com/314248817137201.gif',
        ] 
        if (!args[0]){
            const embed = new Discord.MessageEmbed()

            .setAuthor(`${author.username} is confused`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(random_huh[Math.floor(Math.random() * random_huh.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}