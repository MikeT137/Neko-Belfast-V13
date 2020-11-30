module.exports = {
    name:'smile',
    description: "The user smiles",
    run: async (bot, message, args) => {
        const author = message.author;
        const Discord = require('discord.js');
        const random_smile = [
            'https://media1.tenor.com/images/c5fad21f9828d19044a58f8b84a6e14b/tenor.gif?itemid=6013419',
            'https://i.pinimg.com/originals/af/5b/04/af5b044d2e99797419203db86744bf8e.gif',
            'https://media.tenor.com/images/09c25d681122b9dfdd0710a20c4dfbbd/tenor.gif',
            'https://thumbs.gfycat.com/InsistentUnnaturalEmu-size_restricted.gif',
            'https://i.gifer.com/A6zP.gif',
            'https://i.pinimg.com/originals/ee/06/af/ee06afcfc3b2d833d38b4690e12edb2e.gif',
            'https://media.tenor.com/images/80c6b49239654be3a7cb4c58fb3b73be/tenor.gif',
            'https://cdn.lowgif.com/full/07924591983847ac-shinryaku-ika-musume-anime-smile-gif-on-gifer-by-agamazar.gif',
            'https://i.gifer.com/AfZ2.gif',
            'https://media1.tenor.com/images/e9808bd93cc8961ef81e6fa8ae560046/tenor.gif?itemid=13857197',
            'https://cdn.discordapp.com/attachments/682723921510006786/734433346255323136/image0.gif',
        ]
        if (!args[0]){
            const embed = new Discord.MessageEmbed()

            .setAuthor(`${author.username} smiles, how beautiful`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(random_smile[Math.floor(Math.random() * random_smile.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}