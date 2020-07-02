module.exports = {
    name:'help',
    description: "Shows you the commands",
    execute(message, argument){
        const Discord = require('discord.js');
        const PREFIX = 'b!';
        
        if(!argument[1]){
            const embed = new Discord.MessageEmbed()
            .setTitle('Help')
            .addField('Prefix: ', PREFIX)
            .addField('Commands', 'avatar - shows your avatar\nclear - clears the amount of messages you want\nhelp - shows this message\ninfo - shows bot information\nlove - a lovely message from the bot\nmute - mutes someone for a certain period of time')
            .addField('Interactive commands (@someone)', 'handhold, hug, kiss, pat, snuggle')
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}