const {prefix} = require('../../config.json')
module.exports = {
    name:'apologise',
    description: "It sends a apologising gif",
    usage: `${prefix}apologise @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_sorry = [
            'https://c.tenor.com/6PMCyJTUgsgAAAAM/meirocho-iam.gif',
            'https://c.tenor.com/4s5VdBQUAj8AAAAC/imsorry-sorry.gif',
            'https://c.tenor.com/q6vmV7JzZaAAAAAM/anime-oops-my-fault.gif',
            'https://c.tenor.com/i9UkjLlNlt4AAAAC/anime-sorry.gif',
            'https://68.media.tumblr.com/ba62e8839e449cf8114fb362e6a37531/tumblr_og7o1z5ANu1vctqxpo1_500.gif',
            'https://c.tenor.com/YTPLqiB6gLsAAAAM/sowwy-sorry.gif',
            'https://i.pinimg.com/originals/ef/37/e5/ef37e5537dee29923b0bf97ae97702aa.gif',
            'https://c.tenor.com/BEeSoXBrCr0AAAAC/cute-sorry.gif',
            'https://68.media.tumblr.com/4da21004c4679d1f2d47196eea817652/tumblr_og7o3pN2jJ1vctqxpo1_500.gif',
            'https://i.kym-cdn.com/photos/images/newsfeed/001/038/642/1b8.gif'
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id === `${bot.user.id}`) {
                message.channel.send('Im not sure why you\'re apologising, but it\'s okay, i forgive you.');
            }else {
                message.delete();
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} is apologising to ${person.username}, sorry T-T`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_sorry[Math.floor(Math.random() * random_sorry.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to apologise to')
        }
    }
}