module.exports = {
    name:'info',
    description: "Shows the bot's information",
    execute(message, argument){
        const Discord = require('discord.js');
        var version = '1.5';
        const birthday = 'june 29th 2020';
        const creator = 'Miku Yoruka#0916';
        
        if(!argument[1]){
            const embed = new Discord.MessageEmbed()
            .setTitle('Information')
            .addField('Bot Description', 'Im Belfast:heart:, your lovely maid that will be happy to serve you in any way you want, but have patience with me since i learn new things very slowly.')
            .addField('Version', version)
            .addField('Birthday', birthday)
            .addField('Creator', creator + ':flag_td:')
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}