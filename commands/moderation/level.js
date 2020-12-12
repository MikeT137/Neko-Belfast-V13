/*module.exports = {
    name:'level',
    description: "Shows the user their current level and xp",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const xp = require('../../xp.json');
        const currentxp = xp[message.author.id].xp;
        const currentLvl = xp[message.author.id].level;
        const nextLvlxp = currentLvl * 250;
        const difference = nextLvlxp - currentxp

        if(!xp[message.author.id]) {
            xp[message.author.id] = {
                xp: 0,
                level: 1
            }
        }else {
            const embed = new Discord.MessageEmbed()

                .setAuthor(message.author.username)
                .addField('Level', currentLvl)
                .addField('XP', currentxp)
                .setFooter(`${difference} XP until level up!`)
                .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
        
    }
}*/