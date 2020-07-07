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
            .addField('Modertion Commands', 'ban - bans a member\nclear - clears the amount of messages you want\nhelp - shows this message\ninfo - shows bot information\nkick - kicks a member\nmute/unmute - mutes/unmutes someone')
            .addField('Self commands', 'avatar, cry, dance, laugh, love, smile, smug')
            .addField('Interactive commands (@someone)', 'handhold, hug, kiss, lick, pat, poke, punch, slap, snuggle')
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}