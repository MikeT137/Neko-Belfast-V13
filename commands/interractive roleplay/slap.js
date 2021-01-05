module.exports = {
    name:'slap',
    description: "Slaps a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_slap = [
            'https://media.tenor.com/images/9a2c17416b01df4363c05702a489425b/tenor.gif',
            'https://i.imgur.com/GPQJEx5.gif',
            'https://media.tenor.com/images/c366bb3a5d7820139646d8cdce96f7a8/tenor.gif',
            'https://media.tenor.com/images/356fec15c3c741170a67fd740f918ecd/tenor.gif',
            'https://i.pinimg.com/originals/bf/ef/b4/bfefb401ed8f1f7a3fee62d76a2856a4.gif',
            'https://i.pinimg.com/originals/46/b0/a2/46b0a213e3ea1a9c6fcc060af6843a0e.gif',
            'https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif',
            'https://i.imgur.com/o2SJYUS.gif',
            'https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956',
            'https://i.imgur.com/Li9mx3A.gif',
        ]
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
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                const embed = new Discord.MessageEmbed()

                .setAuthor(`Dont do that nya!! Dont hurt yourself please..`)
                .setImage(random_cry[Math.floor(Math.random() * random_cry.length)])
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }else {
                const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} gave ${person.username} a slap...so violent`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(random_slap[Math.floor(Math.random() * random_slap.length)])
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to slap them')
        }
    }
}