module.exports = {
    name:'facepalm',
    description: "It sends a facepalming gif",
    usage: 'b.facepalm',
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_fp = [
            'https://media1.tenor.com/images/be96db9b9acfd04fd2f5d890e2c51781/tenor.gif?itemid=14355381',
            'https://i.gifer.com/YYBe.gif',
            'https://media.tenor.com/images/59ae6e3415612f1429fb6bc5cec806da/tenor.gif',
            'https://i.pinimg.com/originals/46/5c/34/465c344e842fe1705fa88211a60b3134.gif',
            'https://media.tenor.com/images/4b4c46f0a4fdb4fc6ce484a8d441fa53/tenor.gif',
            'https://media.tenor.com/images/f29f625c200acb067c986ecf3440bf60/tenor.gif',
            'https://image.myanimelist.net/ui/tJ2Fy6YEJKrcduKF0rRJJH6S5GoWYIMEtxyHMONLFibVHnK5ikEpUvHSirwzRIGP4aTaSXx0-pYsnFVU_4TjFodnYIpc2df4R91T3kPjGz4OmJ1RVx1CnlYDx4ZvtbN-3iRckaWa8HKAjwAbyEqq-w',
            'https://66.media.tumblr.com/390c9a4143c6b2ecbc346345c1c13f01/tumblr_ohatgnXFlO1tydz8to1_500.gifv',
            'https://media.tenor.com/images/53d8027aca11f5e3ebbcd54f0f25c4c9/tenor.gif',
            'https://media.tenor.com/images/0649be57365455f5a6518c00695c6779/tenor.gif',
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is making a facepalm`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_fp[Math.floor(Math.random() * random_fp.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}