module.exports = {
    name:'cry',
    description: "The user cries",
    run: async (bot, message, argument){
        const author = message.author;
        const Discord = require('discord.js');
        const random_cry = [
            'https://media1.tenor.com/images/b88fa314f0f172832a5f41fce111f359/tenor.gif?itemid=13356071',
            'https://media1.tenor.com/images/09b085a6b0b33a9a9c8529a3d2ee1914/tenor.gif?itemid=5648908',
            'https://media.tenor.com/images/19089cd2b4970740debff2cdfc43329a/tenor.gif',
            'https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif',
            'https://media.giphy.com/media/Xqlsn2kLPBquI/giphy.gif',
            'https://media.tenor.com/images/bf139869d81cd9b73144d6b941ebb733/tenor.gif',
            'https://i.pinimg.com/originals/9d/cb/2b/9dcb2b83c29e6c70b4971e718cabe958.gif',
            'https://66.media.tumblr.com/c65a4af4ff032d1ca06350b66a1e819c/tumblr_mtxk6zVzaa1sogk1do1_r1_500.gif',
            'https://66.media.tumblr.com/5b4e0848d8080db04dbfedf31a4869e2/tumblr_inline_or4whcrg1z1ueut6r_540.gif',
            'https://thumbs.gfycat.com/HalfAssuredBorderterrier-size_restricted.gif',
        ]
        if(!argument[1]) {
            const embed = new Discord.MessageEmbed()

            .setTitle(`${author.username} is crying ;-;`)
            .setImage(random_cry[Math.floor(Math.random() * random_cry.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}