const {prefix} = require('../../config.json')
module.exports = {
    name:'pat',
    description: "It sends a patting gif",
    usage: `${prefix}pat @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_pat = [
            'https://c.tenor.com/N41zKEDABuUAAAAC/anime-head-pat-anime-pat.gif',
            'https://c.tenor.com/E6fMkQRZBdIAAAAM/kanna-kamui-pat.gif',
            'https://i.pinimg.com/originals/ba/0a/18/ba0a18b4028f9c210f830f7a82a574cb.gif',
            'https://i.pinimg.com/originals/8b/42/6c/8b426c9bedc37054cd7e73925fa10da5.gif',
            'https://c.tenor.com/jEfC8cztigIAAAAC/anime-pat.gif',
            'https://i.pinimg.com/originals/ec/b8/7f/ecb87fb2827a022884d5165046f6608a.gif',
            'https://66.media.tumblr.com/a72dd82535f3e7accd827c202dacc09a/tumblr_pfyiqz0pFL1th206io1_640.gif',
            'https://thumbs.gfycat.com/BlushingDeepBlacknorwegianelkhound-size_restricted.gif',
            'https://c.tenor.com/dmYhPDHbbI4AAAAM/misha-misha-necron-anos-voldigoad-the-misfit-of-demon-king-academy-headpat-pat.gif',
            'https://animesher.com/orig/0/90/901/9010/animesher.com_girl-funny-pat-901096.gif'
        ]
        if(message.mentions.members.size >= 1) {
            message.delete();
            if(person.id === `${bot.user.id}`) {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`Thank you ${message.author.username}, have some pats back!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_pat[Math.floor(Math.random() * random_pat.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else if(person.id == message.author.id) {
                const embed2 = new Discord.MessageEmbed()

                    .setAuthor('Aww, its okay, belfast will give you some pats nya~', message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_pat[Math.floor(Math.random() * random_pat.length)])
                    .setColor('#7d77df')
                message.channel.send(embed2);
            }else {
                const embed3 = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} is patting ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_pat[Math.floor(Math.random() * random_pat.length)])
                    .setColor('#7d77df')
                message.channel.send(embed3);
            }
        }else {
            message.channel.send('You have to ping someone to pat them')
        }
    }
}