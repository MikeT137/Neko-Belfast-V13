const {prefix} = require('../../config.json')
module.exports = {
    name:'lick',
    description: "It sends a licking gif",
    usage: `${prefix}lick @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_lick = [
            'https://i.pinimg.com/originals/81/76/9e/81769ee6622b5396d1489fb4667fd20a.gif',
            'https://c.tenor.com/jyv9sexi1fYAAAAC/anime-lick.gif',
            'https://c.tenor.com/g1HYBQGPEVYAAAAC/anime-lick.gif',
            'https://i.makeagif.com/media/7-29-2021/sruzfN.gif',
            'https://i.kym-cdn.com/photos/images/original/001/005/876/156.gif',
            'https://c.tenor.com/5xI95adAuLMAAAAd/anime-lick.gif',
            'https://i.pinimg.com/originals/e6/1d/a7/e61da774938e4f209818edcbc0d4a671.gif',
            'http://pa1.narvii.com/6408/4ce0ba083754cfb6756c9a48671730c5191147f1_00.gif',
            'https://c.tenor.com/YchnxgjYHgIAAAAC/neko-lewd.gif',
            'https://i.gifer.com/R0FD.gif'
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send(`Just like a kitty aren\'t you? I\'m proud of you nya~`)
            }else if(person.id === `${bot.user.id}`) {
                message.delete();
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`I shall fight fire with fire nya!!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_lick[Math.floor(Math.random() * random_lick.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else {
                message.delete();
                const embed2 = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} is licking ${person.username} O///O`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_lick[Math.floor(Math.random() * random_lick.length)])
                    .setColor('#7d77df')
                message.channel.send(embed2);
            }
        }else {
            message.channel.send('You have to ping someone to lick them')
        }
    }
}