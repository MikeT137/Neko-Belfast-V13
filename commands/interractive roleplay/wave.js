module.exports = {
    name:'wave',
    description: "Waves at a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_wave = [
            'https://media.tenor.com/images/6870fd2f3f7be6bc6f08083a899c4889/tenor.gif',
            'https://media.tenor.com/images/f74374a8d12dbcd33c274dec139a3ff7/tenor.gif',
            'https://media1.tenor.com/images/be31a8ca17cee73cd333b846bbef583b/tenor.gif?itemid=11925598',
            'https://i.pinimg.com/originals/05/6c/58/056c584d9335fcabf080ca43e583e3c4.gif',
            'https://i.imgur.com/AqK6ipr.gif',
            'https://media.tenor.com/images/33ee3367675a99d39888a7ad273e0291/tenor.gif',
            'https://media.tenor.com/images/33ee3367675a99d39888a7ad273e0291/tenor.gif',
            'https://i0.wp.com/drunkenanimeblog.com/wp-content/uploads/2018/06/anime-wave-gif.gif?resize=620%2C345&ssl=1',
            'https://i.pinimg.com/originals/90/0e/50/900e502f7534a3756106655170ff6397.gif',
            'https://thumbs.gfycat.com/FaroffEmbarrassedHerald-size_restricted.gif',
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send('Look at you, you\`re beautiful nya~')
            }else {
            const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} waves at ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(random_wave[Math.floor(Math.random() * random_wave.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to wave at them')
        }
    }
}