module.exports = {
    name:'handhold',
    description: "Hold a user's hand",
    execute(message, argument){
        const Discord = require('discord.js');
        const author = message.author;
        const person = message.mentions.users.first();
        const random_hh = [
            'https://media.giphy.com/media/yX0CDRs2B2y88/giphy.gif',
            'https://media.giphy.com/media/w7RGPBLGO8rjq/giphy.gif',
            'https://carnivorouslreviews.files.wordpress.com/2018/08/interlocking.gif',
            'https://66.media.tumblr.com/7a1d87c8e7056ac5ce2a202d53a36905/tumblr_myqbqfZWSb1sp0cggo1_500.gif',
            'https://media.tenor.com/images/6ac3e0ade34f080bb295e4caf2207756/tenor.gif',
            'https://i.pinimg.com/originals/cf/27/a2/cf27a233bea49a54f805bd4f5e0e44b5.gif',
            'https://lh3.googleusercontent.com/proxy/ztVUWisAM2h821ArCPcnTiqlSvkqwiqoFczqE0lVgd7ixWAjuPniwAVr3v1CbQbSXIXOhVcizc4GBdkUDJwe2nXfN5R7GP5QjyxHRV0mYKlHvDgP9yQ0bBV5aNB8YHy3gRaDu-fpo1SoKg',
            'https://giffiles.alphacoders.com/906/90663.gif',
            'https://i.kym-cdn.com/photos/images/original/001/100/981/002.gif',
            'https://data.whicdn.com/images/248505351/original.gif',
        ]
        if(message.mentions.members.size >= 1 && argument == person) {
            const embed = new Discord.MessageEmbed()

            .setTitle(`${author.username} holds ${person.username}s hand...:flushed:`)
            .setImage(random_hh[Math.floor(Math.random() * random_hh.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }else if(argument == author) {
            message.channel.send('Aww, ill hold your hand :blush:')
        }
    }
}