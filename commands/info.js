module.exports = {
    name:'info',
    description: "Shows the bot's information",
    execute(message, argument){
        const Discord = require('discord.js');
        var version = '1.0.3';
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
            .setThumbnail('https://lh3.googleusercontent.com/proxy/HOezEcBPsOMAXMlF5J9hVWBTLE6rhQhns8Hrz1GB2cWI6HLYoqhETWFdfNYik68lz3P00HBvYpKVkTrPJinTOJ_2K66d9bnJ6_NRa14oUVjRtAAcRi7v6r7xNzdC811ORkR3lyco40h63TJ4B9FwdjnxEAXqS-x_-ujZm7QVhkJ3nEYbcKQOcY7Gn4YW90lYXWC33DKxFsqXN07fZz0')
            message.channel.send(embed);
        }
    }
}