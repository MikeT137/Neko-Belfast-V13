module.exports = {
    name: 'test',
    description: 'Just testing the emoji react',
    run: async(bot, message,sergs) => {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()

        .addField('What type of icecream do you like?', '👍 - chocolate\n✊ - vanilla\n👎 - mint')
        .setColor(0x4AEFBA)
        message.channel.send(embed);
        await message.react('👍');
        await message.react('✊');
        await message.react('👎')

        .then((msg)=> {
            if(message.react == '👍') {
                msg.edit('you did it right boiii!!')
            }
        })
    }
}