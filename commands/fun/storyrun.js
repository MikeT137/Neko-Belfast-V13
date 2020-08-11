const Discord = require('discord.js');
module.exports = {
    name: 'storyrun',
    description: 'The story about running',
    run: async(bot, message, args) => {
        message.channel.send('Youre a 20 year old boy. You live in a small cabin inside a forest. Youre there alone, no parents, no friends, no one. Its currently 17th of october. You thought that it would be really good if you chopped some wood with an axe so you can warm yourself when winter comes. You chop wood, doing your business. But suddenly you hear a weird sound coming from afar. In that moment you:\n👍 - still chop wood\n✊ - go inside your house\n👎 - take your axe with you and investigate the zone\n\nSelect your choice').then(msg => {
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
                        msg.edit('You think to yourself that it was just an animal or something, so you decide to ignore it. You then finish chopping the wood, you grab all of it, and go towards your basement so you can leave it there. But then you hear that weird sound again, this time coming from your basement. You then:\n👍 - go in the basement\n👎 - leave the cabin\n\nSelect your choice');
                        msg.remove('👍', '✊', '👎')
                        if(reaction.emoji.name === '👍') {
                            msg.edit('wtf bro');
                        }
                    }else if(reaction.emoji.name === '✊') {
                        msg.edit('The noises started to get louder and louder. And so because you were scared you tried to call for help, but there was no signal. And then a tall creature with a siren for a head gets closer to your cabin. You:\n👍 - go on bed and hide yourself with a blanket\n👎 - go outside and try to run away from the siren head\n\nSelect your choice');
                    }else {
                        msg.edit('You then decide to investigate the zone. But then you see a tall creature with a siren for a head. The creature sees you and runs at you really fast, and then your reflexes starts to kick in and you hit his leg with your axe and then you quickly run away. And because you were very close to your cabin, you thought it wasnt the best idea to hide in your cabin. You then start running away from him and eventually you see a hunter with a double barrel shotgun driving near you. You then say: **Help! This creature is chasing me!** And then you get in the car and the hunter drives away from the monster. It was a long ride, but eventually you arrive at the hunters cabin. You then sit down at the table with him and have a chat.\nhunter: **What was that creature?**\nyou: **I dont know, but it definitely wasnt friendly. I was just doing my thing, cutting wood and all, and then i heard some siren noises coming from the forest. Though it was my mistake that i went to check what it was. Thanks for saving me from that thing**\nhunter: **Youre welcome. Come on, eat up, i imagine youre pretty hungry**\nyou: **Ah, thanks**\nYou then start eating, but whatever it was, it had a weird flavour. After youre done eating. You then go to sleep. The hunter said hell go to sleep too. But he lied. And he slowly walks in with a knife and a fork towards you. You then realise that the hunter was a cannibal. You then:\n👍 - try to fight him\n👎 - get your axe and throw it at him\n\nSelect your choice');
                    }
                })
        });
    }
}