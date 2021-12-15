const {prefix} = require('../../config.json')
module.exports = {
    name:'handhold',
    description: "It sends a handholding gif",
    usage: `${prefix}handhold @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_hold = [
            'https://i.pinimg.com/originals/9d/92/1a/9d921ae2f69420beb68dcf083d7e0f43.gif',
            'https://c.tenor.com/ONvOvboeaYAAAAAM/aesthetic-animated.gif',
            'https://c.tenor.com/rU3xZo2_jaIAAAAC/anime-hold.gif',
            'https://i.gifer.com/YjED.gif',
            'https://38.media.tumblr.com/fd8b48669803ba210f0fd90e1537a64d/tumblr_no2qmvDrrM1uury7mo4_500.gif',
            'https://animesher.com/orig/1/147/1476/14768/animesher.com_misaki-mei-gif-hands-1476878.gif',
            'https://64.media.tumblr.com/316b2837d1d4f027142f8162951b8db3/tumblr_mz2up4FAOQ1qbvovho1_500.gifv',
            'https://64.media.tumblr.com/17079aa75c95564ee56c38b010d967aa/tumblr_p4qivjppT11wayez7o1_500.gifv',
            'https://c.tenor.com/WUZAwo5KFdMAAAAM/love-holding-hands.gif'
        ]
        if(message.mentions.members.size >= 1) {
            message.delete();
            if(person.id === `${bot.user.id}`) {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`I will never let go of master\'s hand nya!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_hold[Math.floor(Math.random() * random_hold.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else if(person.id == message.author.id) {
                const embed2 = new Discord.MessageEmbed()

                    .setAuthor(`Are you cold? Here, hold my hand!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_hold[Math.floor(Math.random() * random_hold.length)])
                    .setColor('#7d77df')
                message.channel.send(embed2);
            }else {
                const embed3 = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} holds ${person.username}\'s hand...O///O`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_hold[Math.floor(Math.random() * random_hold.length)])
                    .setColor('#7d77df')
                message.channel.send(embed3);
            }
        }else {
            message.channel.send('You have to ping someone to hold their hand')
        }
    }
}