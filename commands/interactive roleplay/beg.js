const {prefix} = require('../../config.json')
module.exports = {
    name:'beg',
    description: "It sends a begging gif",
    usage: `${prefix}beg @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_beg = [
            'https://c.tenor.com/Y9g7q5u4W8IAAAAC/girl-please.gif',
            'https://c.tenor.com/NInsperhlYsAAAAC/anime-begging.gif',
            'https://c.tenor.com/hbGUzkHNBXgAAAAC/anime-girl.gif',
            'https://i.pinimg.com/originals/c2/fa/da/c2fadaea88e77e3adc1ded7f6c35cfa0.gif',
            'https://c.tenor.com/NkO_21leYdcAAAAC/please-anime.gif',
            'https://i.pinimg.com/originals/fa/91/c3/fa91c39c672e09482d306c986aa49b51.gif',
            'https://1.bp.blogspot.com/-6Fu53YNno38/WgyapImEg0I/AAAAAAAA_iQ/BHViJTXn9swyeIL86mMgJRiom22SWlkXACKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BKonohana%2BKitan%2B-%2BEpisode%2B7%2B-%2BSakura%2Band%2BYuzu%2BBeg.gif',
            'https://plyasm.files.wordpress.com/2018/01/chuunibyou-beg.gif?w=356',
            'https://thumbs.gfycat.com/TameMiniatureHedgehog-size_restricted.gif',
            'https://c.tenor.com/TgtTEClE92gAAAAM/crying-face-appeal.gif'
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id === `${bot.user.id}`) {
                message.channel.send('Master, you already know that i do anything that you ask me to, no need for begging nya~.');
            }else {
                message.delete();
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} is begging ${person.username} for help, pleaseee`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_beg[Math.floor(Math.random() * random_beg.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to beg to them')
        }
    }
}