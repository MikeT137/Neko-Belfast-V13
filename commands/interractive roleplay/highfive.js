module.exports = {
    name:'highfive',
    description: "Highfives a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_hf = [
            'https://media1.tenor.com/images/7b1f06eac73c36721912edcaacddf666/tenor.gif?itemid=10559431',
            'https://media.tenor.com/images/b3e2c0f25f4deab000a4bdaad83830e3/tenor.gif',
            'https://media.tenor.com/images/18ed7428944c5312d32484f305ea2e25/tenor.gif',
            'https://media.tenor.com/images/f5d0866aef520ada41b23639d5577fbb/tenor.gif',
            'https://thumbs.gfycat.com/SmugLonelyAltiplanochinchillamouse-size_restricted.gif',
            'https://i.pinimg.com/originals/80/11/43/8011430130d84b2bb6895b436b0f3010.gif',
            'https://thumbs.gfycat.com/BreakableMessyHarrierhawk-size_restricted.gif',
            'https://i.imgur.com/Pr1rEzX.gif',
            'https://1.bp.blogspot.com/-zCYOY8ef-Ro/WfUW-iO8Y5I/AAAAAAAA-MM/uQYRw57PmYM_pjl8kJQDAs1EKLB_-2CKgCKgBGAs/s1600/Omake+Gif+Anime+-+Love+Live%2521+Sunshine%2521%2521+S2+-+Episode+4+-+Yoshiko+Mari+High+Five.gif',
            'https://data.whicdn.com/images/330723767/original.gif',
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send('That looks more like clapping, but still, good job nya!')
            }else {
                const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} highfives ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(random_hf[Math.floor(Math.random() * random_hf.length)])
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to highfive them')
        }
    }
}