module.exports = {
    name:'laugh',
    description: "The user laughs",
    execute(message, argument){
        const Discord = require('discord.js');
        const random_laugh = [
            'https://media.tenor.com/images/c281eb235f5f6bc5667cf856e8c3eb1a/tenor.gif',
            'https://media.giphy.com/media/pa1WaYStUKyLC/giphy.gif',
            'https://media1.tenor.com/images/e62fc9360b184a7dd8a0e786d5d594fc/tenor.gif?itemid=12381387',
            'https://thumbs.gfycat.com/ChillyTestyDowitcher-small.gif',
            'https://media.tenor.com/images/ae165696602b2d61dbe05477bc934e41/tenor.gif',
            'https://media.tenor.com/images/bfe3102feb5a6ddabe2920f174ea808c/tenor.gif',
            'https://thumbs.gfycat.com/ImaginativeTepidDormouse-size_restricted.gif',
            'https://66.media.tumblr.com/3a3aff7b4d40ec4fecf2329da1ec71cc/tumblr_mne2bvFQMu1qk9f8bo1_500.gif',
            'https://data.whicdn.com/images/280502932/original.gif',
            'https://i.imgur.com/NpNoc0q.gif',
        ]
        if(!argument[1]) {
            const embed = new Discord.MessageEmbed()

            .setImage(random_laugh[Math.floor(Math.random() * random_laugh.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}