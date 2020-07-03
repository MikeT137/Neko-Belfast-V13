module.exports = {
    name:'mooni',
    description: "A secret command only for mooni",
    execute(message, argument){
        const Discord = require('discord.js');
        
        if(!argument[1]) {
            const embed = new Discord.MessageEmbed()

            .addField('I love you Mooni!', 'I wuv you so much my little moon, i want to stay with you forever and snuggle with you a olt and maybe even some other things >w<')
            .setImage('https://gifimage.net/wp-content/uploads/2017/11/i-love-you-anime-gif-11.gif')
            .setColor(0x4AEFBA)
            .setFooter('Sincerely, Miku')
            message.channel.send(embed);
        }
    }
}