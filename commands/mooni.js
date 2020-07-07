module.exports = {
    name:'mooni',
    description: "A secret command only for mooni",
    execute(message, argument){
        const Discord = require('discord.js');
        
        if(!argument[1]) {
            const embed = new Discord.MessageEmbed()

            .addTitle('Thank ouy for accepting such a kid like me in your "life" and for everything you done so far. I always look up to you because of how cool and amazing person you are, and believe me, you changed my life for the better and ill be loyal to you no matter what, And for that...i cant be grateful enough, i wuv you')
            .setImage('https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif')
            .setColor(0x4AEFBA)
            .setFooter('Sincerely, Miku')
            message.channel.send(embed);
        }
    }
}