module.exports = {
    name:'howl',
    description: "It sends a howling gif",
    usage: 'b.howl',
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');

        const random_awoo = [
            'https://i.pinimg.com/originals/af/69/b9/af69b9b021202ab0d736212d982e87d1.gif',
            'https://i.kym-cdn.com/photos/images/original/000/910/236/1aa.gif',
            'https://thumbs.gfycat.com/QuarterlyThornyArcticwolf-max-1mb.gif',
            'https://media.tenor.com/images/ec5ec100ff25619f65e01baf7e2af660/tenor.gif',
            'https://i.pinimg.com/originals/12/dd/8b/12dd8b7f222c83d8f65d8ea8d2ddbcc1.gif',
            'https://i.imgur.com/bxlomae.gif',
            'https://thumbs.gfycat.com/DefensiveRigidHorsefly-max-1mb.gif',
            'https://steamuserimages-a.akamaihd.net/ugc/490145495169359481/DF0519A6B51DDE1F4DFAEC03C997374AA851D28E/'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()
        
            .setAuthor(`${message.author.username} is howling, awoo`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_awoo[Math.floor(Math.random() * random_awoo.length)])
            .setColor('#7d77df')
        message.channel.send(embed)
    }
}