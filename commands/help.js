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
            .setThumbnail('https://lh3.googleusercontent.com/proxy/HOezEcBPsOMAXMlF5J9hVWBTLE6rhQhns8Hrz1GB2cWI6HLYoqhETWFdfNYik68lz3P00HBvYpKVkTrPJinTOJ_2K66d9bnJ6_NRa14oUVjRtAAcRi7v6r7xNzdC811ORkR3lyco40h63TJ4B9FwdjnxEAXqS-x_-ujZm7QVhkJ3nEYbcKQOcY7Gn4YW90lYXWC33DKxFsqXN07fZz0')
            message.channel.send(embed);
        }
    }
}