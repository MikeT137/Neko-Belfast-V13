module.exports = {
    name:'cheer',
    description: "The user is cheering up",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_cheer = [
            'https://media.tenor.com/images/e09da28187e95c74d9a2a214f3bc28cb/tenor.gif',
            'https://media.tenor.com/images/3fcc1b897b5dccb2a5edda6fb0d78e59/tenor.gif',
            'https://media.tenor.com/images/17ffa69e91873c7991e9b7fbf8c12f03/tenor.gif',
            'https://media1.tenor.com/images/296818513b48a1639a837ea68d4eda46/tenor.gif?itemid=5543976',
            'https://i.pinimg.com/originals/c0/81/68/c08168d2626d4d0baea30d8a517f09d4.gif',
            'https://66.media.tumblr.com/e77ea20555c0927136aae9e34ed509f3/tumblr_pjvutmJ66r1th206io1_640.gif',
            'https://media.tenor.com/images/e284c029dad4af4bd870662f5834c847/tenor.gif',
            'https://i.kym-cdn.com/photos/images/newsfeed/001/113/007/ed9.gif',
            'https://i.imgur.com/GsiOLVC.gif',
            'https://img.kokakiwi.net/anime/cheer2.gif',
        ]
        if(message.mentions.members.size >= 1) {
            message.delete();
            if(person.id == message.author.id) {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} is cheering themselves up`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_cheer[Math.floor(Math.random() * random_cheer.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} is cheering up ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_cheer[Math.floor(Math.random() * random_cheer.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to cheer them up')
        }
    }
}