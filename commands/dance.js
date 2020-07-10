module.exports = {
    name:'dance',
    description: "The user dances",
    execute(message, argument){
        const author = message.author;
        const Discord = require('discord.js');
        const random_dance = [
            'https://media1.tenor.com/images/c925511d32350cc04411756d623ebad6/tenor.gif?itemid=13462237',
            'https://i.pinimg.com/originals/4b/34/c2/4b34c2fd473942b7fbd25c443b8ed8a2.gif',
            'https://i.ya-webdesign.com/images/anime-dance-gif-png.gif',
            'https://66.media.tumblr.com/6365c83624552427f6de9c92e8e28b52/tumblr_nmud2yJw7D1unbsixo1_500.gifv',
            'https://d2w9rnfcy7mm78.cloudfront.net/2145256/original_cd9c01187cead45cd791beafa78f7e08.gif?1525707539',
            'https://i.ya-webdesign.com/images/transparent-dancer-animated-4.gif',
            'https://media.tenor.com/images/279bf22997edc0703cee75385645d7f8/tenor.gif',
            'https://pa1.narvii.com/6243/5eb4849659aa14f4d80310a9a1810893de7374fc_hq.gif',
            'https://cdn.lowgif.com/small/f6fc2c15b2c49c8b-dance-gif-anime-tumblr.gif',
            'https://i.gifer.com/Afdv.gif',
        ]
        if(!argument[1]) {
            const embed = new Discord.MessageEmbed()

            .setTitle(`Looks like ${author.username} is having fun`)
            .setImage(random_dance[Math.floor(Math.random() * random_dance.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}