const Discord = require('discord.js');
module.exports = {
    name: 'storyrun',
    description: 'The story about running',
    run: async(bot, message, args) => {
        message.channel.send('Youre a 20 year old boy. You live in a small cabin inside a forest. Youre there alone, no parents, no friends, no one. Its currently 17th of october. You thought that it would be really good if you chopped some wood with an axe so you can warm yourself when winter comes. You chop wood, doing your business. But suddenly you hear a weird sound coming from afar. In that moment you:\n👍 - still chop wood\n✊ - go inside your house\n👎 - take your axe with you and investigate the zone\n\nReact with one of the emojis in the message you send in the server').then(msg => {
            msg.react('👍');
            msg.react('✊');
            msg.react('👎');
            const filter = (reaction, user) => {
                return ['👍', '✊', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            
            msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
            
                    if(reaction.emoji.name === '👍') {
                        msg.edit('skrrr');
                    }else if(reaction.emoji.name === '✊') {
                        msg.edit('awoo');
                    }else {
                        msg.edit('wew');
                    }
                })
        });
    }
}