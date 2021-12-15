const {prefix} = require('../../config.json')
module.exports = {
    name:'hug',
    description: "It sends a hugging gif",
    usage: `${prefix}hug @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_hug = [
            'https://c.tenor.com/FYKsVaNI7lkAAAAC/anime-hug.gif',
            'https://c.tenor.com/jQ0FcfbsXqIAAAAC/hug-anime.gif',
            'https://i.pinimg.com/originals/a4/13/4f/a4134f06e210a7540ca20ae165dc457f.gif',
            'https://c.tenor.com/WXT5uSvg_M0AAAAC/anime-hug.gif',
            'https://i.gifer.com/27tM.gif',
            'https://c.tenor.com/SPs0Rpt7HAcAAAAM/chiya-urara.gif',
            'https://shinyanimeprincess.files.wordpress.com/2011/11/sometimes-i-just-need-a-hug.gif',
            'https://c.tenor.com/1T1B8HcWalQAAAAC/anime-hug.gif',
            'https://gifburg.com/images/gifs/anime-hug/gifs/0002.gif',
            'https://78.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_500.gif'
        ]
        if(message.mentions.members.size >= 1) {
            message.delete();
            if(person.id === `${bot.user.id}`) {
                const embed = new Discord.MessageEmbed()

                .setAuthor(`Thank you ${message.author.username}, have some hugs back!`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`${args.slice(1, args.length).join(' ')}`)
                .setImage(random_hug[Math.floor(Math.random() * random_hug.length)])
                .setColor('#7d77df')
                message.channel.send(embed);
            }else if(person.id == message.author.id) {
                const embed2 = new Discord.MessageEmbed()

                    .setAuthor('Aww, its okay, belfast will give you some hugs nya~', message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_hug[Math.floor(Math.random() * random_hug.length)])
                    .setColor('#7d77df')
                message.channel.send(embed2);
            }else {
                const embed3 = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} is hugging ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_hug[Math.floor(Math.random() * random_hug.length)])
                    .setColor('#7d77df')
                message.channel.send(embed3);
            }
        }else {
            message.channel.send('You have to ping someone to hug them')
        }
    }
}