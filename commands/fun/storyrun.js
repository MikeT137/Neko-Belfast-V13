module.exports = {
    name:'storyrun',
    discription:'The user gets to play the creators story',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Youre a 20 year old boy. You live in a small cabin inside a forest. Youre there alone, no parents, no friends, no one. Its currently 17th of october. You thought that it would be really good if you chopped some wood with an axe so you can warm yourself when winter comes. You chop wood, doing your business. But suddenly you hear a weird sound coming from afar. In that moment you:\n**Select your choice:**')
        .addField('\n👎 - still chop wood\n✊ - go inside your house\n👍 - take your axe with you and investigate the zone', '\n**Select your choice:**')
        .setColor(0x4AEFBA)
        message.channel.send(embed);

        if(message.react == '👎') {
            message.channel.send('skrrr')
        }else if(message.react == '✊') {
            message.channel.send('boom')
        }else if(message.react == '👍') {
            message.channel.send('wew')
        }
    }
}