const {prefix} = require('../../config.json')
module.exports = {
    name:'bite',
    description: "It sends a biting gif",
    usage: `${prefix}bite @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_bite = [
            'https://c.tenor.com/w_qO1mbg3z4AAAAC/bite-anime.gif',
            'https://c.tenor.com/SXXCutLZdb4AAAAC/anime-bite.gif',
            'https://data.whicdn.com/images/280828748/original.gif',
            'https://c.tenor.com/aLeYKH2ebcoAAAAC/bite-hand.gif',
            'https://c.tenor.com/w4T323o46uYAAAAC/anime-bite.gif',
            'https://animesher.com/orig/0/83/836/8362/animesher.com_tsundere-bite-mao-amatsuka-836203.gif',
            'https://c.tenor.com/KP9bTT9og9YAAAAC/bite-anime.gif',
            'https://c.tenor.com/aLeYKH2ebcoAAAAC/bite-hand.gif',
            'https://c.tenor.com/8UjO54apiUIAAAAC/gjbu-bite.gif'
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send('NYAA! Don\'t bite yourself!')
            }else if(person.id === `${bot.user.id}`) {
                message.delete();
                const embed = new Discord.MessageEmbed()
        
                    .setAuthor(`NYA! T-That hurts ${message.author.username}!!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_bite[Math.floor(Math.random() * random_bite.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else {
                message.delete();
                const embed2 = new Discord.MessageEmbed()
            
                    .setAuthor(`${message.author.username} bit ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_bite[Math.floor(Math.random() * random_bite.length)])
                    .setColor('#7d77df')
                message.channel.send(embed2);
            }
        }else {
            message.channel.send('You have to ping someone to bite to them')
        }
    }
}