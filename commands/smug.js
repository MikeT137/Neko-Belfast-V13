module.exports = {
    name:'smug',
    description: "The user smugs",
    run: async (bot, message, argument){
        const author = message.author;
        const Discord = require('discord.js');
        const random_smug = [
            'https://media.tenor.com/images/1ede0830cfedff828f244330c43008db/tenor.gif',
            'https://i.pinimg.com/originals/70/cc/98/70cc98296034768f8eee9ad124827ba2.gif',
            'https://media1.tenor.com/images/906bbc85a7820f68a7fc658aeeceb069/tenor.gif?itemid=10195728',
            'https://i.kym-cdn.com/photos/images/newsfeed/001/223/569/12b.gif',
            'https://steamuserimages-a.akamaihd.net/ugc/822313860013003060/A78582EDF025EE6C1B8563C3402315DEF506D9BF/',
            'https://steamuserimages-a.akamaihd.net/ugc/233452263528918792/F8C337D852257F5B1D57388F79F383AAC0AE5B3E/',
            'https://thumbs.gfycat.com/TalkativePortlyEel-small.gif',
            'https://media.tenor.com/images/ca852df86e58934d35201354bd9ef5ef/tenor.gif',
            'https://media1.tenor.com/images/aa6d975cb5318886db35f27f692d09d3/tenor.gif?itemid=14495461',
            'https://i.pinimg.com/originals/ec/1f/0c/ec1f0c5a719be61c7fa8005a52ff021a.gif',
        ]
        if(!argument[1]) {
            const embed = new Discord.MessageEmbed()

            .setTitle(`${author.username} smugs, hehe`)
            .setImage(random_smug[Math.floor(Math.random() * random_smug.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}