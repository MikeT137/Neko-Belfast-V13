module.exports = {
    name:'pout',
    description: "The user pouts",
    run: async (bot, message, args) => {
        const author = message.author;
        const Discord = require('discord.js');
        const random_pout = [
            'https://media1.tenor.com/images/b7e132fd3f4e110ea54ef8aa8f4eebbe/tenor.gif?itemid=15650605',
            'https://media.tenor.com/images/700c12f2a858f7eb6f3e20cc164156ee/tenor.gif',
            'https://i.pinimg.com/originals/27/16/68/271668b1037633d7f7ae63dc1a1c29f2.gif',
            'https://66.media.tumblr.com/8c46c4ff7aaec3fee97db03004cecfc8/tumblr_p49rinNVWk1tm1dgio2_400.gifv',
            'https://media.tenor.com/images/0f5d12aa3dfa6d8fd9e8a41bc51ec421/tenor.gif',
            'https://i.gifer.com/cBP.gif',
            'https://data.whicdn.com/images/219799600/original.gif',
            'https://i.imgur.com/w6wtMJb.gif',
            'https://thumbs.gfycat.com/ConsciousLavishGosling-size_restricted.gif',
            'https://media.tenor.com/images/ce2303381c7510cfd9c3714fbb1a56d3/tenor.gif',
        ]
        if (!args[0]){
            const embed = new Discord.MessageEmbed()

            .setAuthor(`${author.username} is pouting, such a tsundere`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(random_pout[Math.floor(Math.random() * random_pout.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}