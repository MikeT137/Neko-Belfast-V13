const {prefix} = require('../../config.json')
module.exports = {
    name:'tickle',
    description: "It sends a tickling gif",
    usage: `${prefix}tickle @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_tickle = [
            'https://c.tenor.com/L5-ABrIwrksAAAAC/tickle-anime.gif',
            'https://c.tenor.com/sa1QuA9GFaoAAAAC/anime-tickle.gif',
            'https://64.media.tumblr.com/ba913c0d21916e57b846e93b783cab39/tumblr_o505jxtnWk1vpbklao4_500.gifv',
            'https://i.pinimg.com/originals/d3/85/54/d38554c6e23b86c81f8d4a3764b38912.gif',
            'https://i.pinimg.com/originals/fe/a7/9f/fea79fed0168efcaf1ddfb14d8af1a6d.gif',
            'https://c.tenor.com/ymMtVnW-TrYAAAAd/nekopara-anime.gif',
            'https://64.media.tumblr.com/7e84a64749cc0389558fa030aaf70adb/0d48494383f863ba-a9/s640x960/8e640f95242abe38cda220ff747f940cb3b8f2e7.gifv',
            'https://i.pinimg.com/originals/86/71/4f/86714fe4b8235be518273095b4eacc38.gif'
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id === `${bot.user.id}`) {
                message.delete();
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} s-stoop, nyaaa!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_tickle[Math.floor(Math.random() * random_tickle.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else {
                message.delete();
                const embed2 = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} is tickling ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_tickle[Math.floor(Math.random() * random_tickle.length)])
                    .setColor('#7d77df')
                message.channel.send(embed2);
            }
        }else {
            message.channel.send('You have to ping someone to tickle them')
        }
    }
}