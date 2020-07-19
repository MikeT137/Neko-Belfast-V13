module.exports = {
    name:'storyrun',
    description: "The user playes the story called run",
    execute(message, argument){
        const Discord = require('discord.js');

        if(!argument[1]) {
            message.channel.send(`${message.author.username}, look in your DM for the story! (dont give spoilers)`)

            const embed = new Discord.MessageEmbed()

            .setTitle('Story - RUN')
            .addField('Youre a 20 year old boy. You live in a small cabin inside a forest. Youre there alone, no parents, no friends, no one. Its currently 17th of october. You thought that it would be really good if you chopped some wood with an axe so you can warm yourself when winter comes. You chop wood, doing your business. But suddenly you hear a weird sound coming from afar. In that moment you:', '\n(b!1)still chop wood\n  2)go inside your house\n  3)take your axe with you and investigate the zone\n\nSelect your choice:')
            .setColor(0x4AEFBA)
            message.author.send(embed);
        }
    }
}