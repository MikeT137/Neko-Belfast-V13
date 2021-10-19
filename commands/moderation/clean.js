const {prefix} = require('../../config.json')
module.exports = {
    name:'clean',
    description: "It deletes how many messages you want (as long as you\'re an admin), however you can\'t delete more than 100 messages",
    usage: `${prefix}clean number`,
    category: 'moderation',
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        const random_clean = [
            'https://c.tenor.com/aY71s0511CkAAAAM/anime-nekopara.gif',
            'https://c.tenor.com/SiUOPxS5lswAAAAM/maid-cafuchino.gif',
            'https://c.tenor.com/nWYeiNh399MAAAAM/anime-nekopara.gif',
            'https://c.tenor.com/MaPgAzNqWUcAAAAC/sailor-moon.gif',
            'https://thumbs.gfycat.com/AcidicMindlessGopher-size_restricted.gif',
            'https://c.tenor.com/0j2Kf4vZ4GMAAAAd/nekopara-cleaning.gif',
            'https://c.tenor.com/Jva7RRCY3CEAAAAC/maid-anime.gif',
            'https://c.tenor.com/BWvmIewm86kAAAAM/cleaning-the-floor-emilia.gif',
            'https://img1.picmix.com/output/stamp/normal/4/8/2/5/1835284_fe2f4.gif'
        ];
        let amount;

        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send('You don\'t have the permission to delete messages. (MANAGE_MESSAGES)')
        }else if(isNaN(args[0]) || parseInt(args[0]) <= 0) {
            message.channel.send('You didn\'t tell me how many messages to delete')
        }else if(message.deletable) {

            if(parseInt(args[0]) > 100) {
                amount = 100;
            }else {
                amount = parseInt(args[0]);
            }

            message.channel.bulkDelete(amount, true)
            .then(deleted => {
                const embed = new Discord.MessageEmbed()
        
                    .setAuthor(`I cleaned up the mess master!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`\`${deleted.size}\` messages have been deleted`, message.author.displayAvatarURL({ dynamic: true }))
                    .setImage(random_clean[Math.floor(Math.random() * random_clean.length)])
                    .setColor('#7d77df')
                message.channel.send(embed)
            }).catch(error => console.log(`Oops, something went wrong:\n${error}`))
        }
    }
}