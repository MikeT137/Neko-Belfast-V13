const {prefix} = require('../../config.json')
module.exports = {
    name:'brofist',
    description: "It sends a brofisting gif",
    usage: `${prefix}brofist @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        const person = message.mentions.users.first();
        const random_fist = [
            'https://c.tenor.com/SJB6qh5DpCsAAAAM/free-anime.gif',
            'https://c.tenor.com/nrWdKhUvhg4AAAAC/tales-of-zestiria-bros.gif',
            'https://i.gifer.com/8WGb.gif',
            'https://c.tenor.com/Wv0valf4XmYAAAAM/yorimoi-sora-yori.gif',
            'https://i.pinimg.com/originals/8d/d5/c3/8dd5c3846f6216b90c9e6c66fe109d8b.gif',
            'https://i.kym-cdn.com/photos/images/newsfeed/001/119/644/97d.gif',
            'https://i.kym-cdn.com/photos/images/newsfeed/000/986/361/b4b.gif',
            'https://i.pinimg.com/originals/17/48/4e/17484ec61b60a06145c84fd1931ce920.gif'
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id === `${bot.user.id}`) {
                message.delete();
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`We make a pretty good team you and me, nyaa~`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_fist[Math.floor(Math.random() * random_fist.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else {
                message.delete();
                const embed2 = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} brofists ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_fist[Math.floor(Math.random() * random_fist.length)])
                    .setColor('#7d77df')
                message.channel.send(embed2);
            }
        }else {
            message.channel.send('You have to ping someone to brofist them')
        }
    }
}