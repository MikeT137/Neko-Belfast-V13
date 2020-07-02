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
            .addField('Commands', 'clear - clears the amount of messages you want\nhelp - shows this message\ninfo - shows bot information\nmute - mutes someone for a certain period of time')
            .addField('Self commands', 'avatar, cry, laugh, love, smile')
            .addField('Interactive commands (@someone)', 'handhold, hug, kiss, lick, pat, poke, punch, slap, snuggle')
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}