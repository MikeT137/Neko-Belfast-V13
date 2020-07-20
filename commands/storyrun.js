module.exports = {
    name:'storyrun',
    description: "The user playes the story called run",
    execute(message, argument){
        const Discord = require('discord.js');

        if(!argument[1]) {
            message.channel.send('   Story - RUN\nYoure a 20 year old boy. You live in a small cabin inside a forest. Youre there alone, no parents, no friends, no one. Its currently 17th of october. You thought that it would be really good if you chopped some wood with an axe so you can warm yourself when winter comes. You chop wood, doing your business. But suddenly you hear a weird sound coming from afar. In that moment you:\nb!1)still chop wood\n   2)go inside your house\n   3)take your axe with you and investigate the zone\nSelect your choice:');
            message.react('👍')
            .then(() => message.react('✋'))
            .then(() => message.react('👎'))
            .catch(() => console.error('One of the emojis failed to react.'));

            const filter = (reaction, user) => {
                return ['👍', '✋', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            
            message.awaitReactions(filter, {max: 1})
                .then(collected => {
                    const reaction = collected.first();
            
                    if (reaction.emoji.name === '👍') {
                        message.channel.send('you reacted with a thumbs up.');
                    }else if(reaction.emoji.name === '✋') {
                        message.channel.send('you reacted with a hand.');
                    }else {
                        message.channel.send('bish');
                    }
                })
                .catch(collected => {
                    console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
                });

            if(message.content === 'b!1') {
                message.author.send('You think to yourself that it was just an animal or something, so you decide to ignore it. You then finish chopping the wood, you grab all of it, and go towards your basement so you can leave it there. But then you hear that weird sound again, this time coming from your basement. You then:\nb!1)go in the basement\n   2)leave the cabin\nSelect your choice:');

            }
        }
    }
}