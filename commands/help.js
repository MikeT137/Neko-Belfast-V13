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
            .addField('Commands', 'help - shows this message\ninfo - shows bot information\nmute - mutes someone for a certain period of time\nlove - a lovely message from the bot\nclear - clears the amount of messages you want\npat/hug/snuggle/kiss - pats/hugs/snuggles/kisses someone')
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}