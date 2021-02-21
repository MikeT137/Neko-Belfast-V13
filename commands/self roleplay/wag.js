module.exports = {
    name:'wag',
    description: "The user wags their tail",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_wag = [
            'https://media1.tenor.com/images/7605c218ad575d0bdc918cf9aaceb322/tenor.gif?itemid=7362848',
            'https://thumbs.gfycat.com/CleanBlushingHypacrosaurus-size_restricted.gif',
            'https://thumbs.gfycat.com/ReflectingZanyKid-size_restricted.gif',
            'https://media1.tenor.com/images/6fa4d185b74fda287eac6bce9b5fe81f/tenor.gif?itemid=17624928',
            'https://i.imgur.com/GQ0aETu.gif',
            'https://i.gifer.com/IL0c.gif',
            'https://media1.tenor.com/images/4e2350469646e2e3ffc339b5a19b2b0a/tenor.gif?itemid=16930418',
            'https://data.whicdn.com/images/72528486/original.gif',
            'https://pa1.narvii.com/6165/7a3f9d44541cf33dc28ec082352f60249ed5124e_hq.gif',
            'https://forum.wotlabs.net/uploads/monthly_2015_10/wag2.gif.3eea1e4d76fed4e30e0d3b1c4f4ebbdf.thumb.gif.d1a842833fd3cbfb209e6ecb32297325.gif',
        ]
        if (!args[0]){
            const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} wags their tail ^^`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(random_wag[Math.floor(Math.random() * random_wag.length)])
                .setColor('#7d77df')
            message.channel.send(embed);
        }
    }
}