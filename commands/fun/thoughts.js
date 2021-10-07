const {prefix} = require('../../config.json')
module.exports = {
    name:'thoughts',
    description: "It\'s a bunch of deep thoughts that Miku (the developer) had in mind. Also there might appear more thoughts in the future but it\'s not for certain.",
    usage: `${prefix}thoughts`,
    category: 'fun',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        
            .setAuthor('Thoughts', message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('*Hello, Miku here. I wrote these few topics with all the knowledge i gathered about those specific topics, because theyre thoughts which really overwhelm me. But either way, keep in mind that whatever i wrote in here must be taken with a grain of salt, because im just a kid rambling about things, so don\'t take them as actual advice. Thank you.*\n\n**Select what thought you want to read:**\n1️⃣ - The advantage of having negative emotions\n2️⃣ - The comfort zone\n3️⃣ - The fear of being lonely\n4️⃣ - The fear of the unknown\n5️⃣ - The meaning of life\n6️⃣ - The never-ending movement of time\n7️⃣ - The potential of being skilled at everything\n8️⃣ - The process of overthinking\n9️⃣ - The thought of being useless')
            .setColor('#7d77df')
        message.channel.send(embed).then(msg => {
            msg.react('1️⃣'),
            msg.react('2️⃣'),
            msg.react('3️⃣'),
            msg.react('4️⃣'),
            msg.react('5️⃣'),
            msg.react('6️⃣'),
            msg.react('7️⃣'),
            msg.react('8️⃣'),
            msg.react('9️⃣')

            const filter = (reaction, user) => {
                return ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
            }

            msg.awaitReactions(filter, { max: 1 })
            .then(collected => {
                const reaction = collected.first();
                
                if(reaction.emoji.name === '1️⃣') {
                    const embed1 = new Discord.MessageEmbed()
        
                        .setAuthor('Thoughts - The advantage of having negative emotions', message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription('*Okay so, we\'ve all had few negative emotions throughout our lives, like fear, anxiety, depression, anger and so on. Well, the question is: Why do we have these feelings if they\'re just making us feel like crap? The whole human race for all these generations has felt all of those emotions, so why? Well, the answer to that is it provides survival, it\'s not the most pleasant way to do it but, in life you always have to go like this: survival first, hapiness second. Because fear protects us from danger, anxiety makes us worried for the potential danger, anger makes us define our teritory so we are not being used by other people against our will, depression makes you feel like a failure and that failure transforms into learning more information. But not to worry, because once survival is assured, we can be relieved and happy once more. :heart:*')
                        .setColor('#7d77df')
                    msg.edit(embed1)
                }
                if(reaction.emoji.name === '2️⃣') {
                    const embed2 = new Discord.MessageEmbed()
        
                        .setAuthor('Thoughts - The comfort zone', message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription('*It sure feels nice staying in your comfort zone, but that comfort zone is very defined and it will start to feel tight, and eventually you\'ll want for that comfort zone to grow bigger. Well in order for that to happen you have to get out of it. I know that you\'re probably a bit confused but lemme give you an example. I think that im a bit fat, and i do want to be strong and have nice muscles, but in order for that to happen, i need to workout, but that feels uncomfortable, so what do i do? I simply dont do it and just dream of what wouldve been like if i had muscles. BUT once i started working out, yes it was painful and uncomfortable but i saw a bit of progress which made me be proud of myself. So you see? I was fine and comfortable at the beginning, but i wanted to be more than i was, i wanted to reach towards something and i leaped for it "out of my comfort zone" in order to achieve it, and i did, and i eventually got comfortable working out and pumped up to do it more, which meant my comfort zone got a lot bigger.*')
                        .setColor('#7d77df')
                    msg.edit(embed2)
                }
                if(reaction.emoji.name === '3️⃣') {
                    const embed3 = new Discord.MessageEmbed()
        
                        .setAuthor('Thoughts - The fear of being lonely', message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription('*You know, as a teenager, i\'ve always wanted someone to be by my side, a lover, because i didn\'t want to be that lonely, but sadly i never had a lover. And whenever i met with some of my relatives they always asked me if i have a girlfriend and i always said no, which made me feel bad. And because of that i wanted to get one as soon as possible. But the thing about getting a lover is that, you shouldn\'t try to hurry it up, or at least you shouldn\'t try to go out for them either way. Because it has to be something natural, you have to first be friends with a person, and slowly make that friendship closer and closer until you become lovers. And that way youre always building each other\'s trust, which is always a good thing in a relationship. So don\'t rush it, because if you just try to be yourself, the time will come eventually. (This also applies for friendships)*')
                        .setColor('#7d77df')
                    msg.edit(embed3)
                }
                if(reaction.emoji.name === '4️⃣') {
                    const embed4 = new Discord.MessageEmbed()
        
                        .setAuthor('Thoughts - The fear of the unknown', message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription('*You know, we all have this fear, being afraid of the unknown. But the problem with this fear is that it \"protects\" you from a potential opportunity in your life which could or couldn\'t have been a game-changer for you. We are always afraid because we don\'t want to fail and have no way of turning back time and living with the regret of doing the wrong thing. Well, as stupid as that may sound, you just have to go for it, you never know what might be good or bad for you, and that\'s why you shouldn\'t be afraid to try. Even if a famous quote says that \"to try invites failure\", well i think that you shouldn\'t worry too much because life itself is made to be lived by trial and error, you fail and you fail, until you eventually suceed. And this aplies for pretty much everything, getting a job, making new friends, etc. So don\'t be afraid to try new things :3*')
                        .setColor('#7d77df')
                    msg.edit(embed4)
                }
                if(reaction.emoji.name === '5️⃣') {
                    const embed5 = new Discord.MessageEmbed()
        
                        .setAuthor('Thoughts - The meaning of life', message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription('*If you\'ve ever wondered \"what\'s the meaning of life? why am i doing all of these things if they will get washed away with time?\". Well the answer to the first question is simply: there is no meaning, because youre the one who has to give meaning to it. And the second question, well, the goal of doing something is that in the end you\'ll bring hapiness, either it being to yourself, or to others. And to give you an example, this bot which you\'re using right now, i just made it for fun, and hosted it on a site, paying money every month, while i was getting no money in return. Why? Well, because i never made it for money, and i know that losing money for what my family might think would be \"a stupid cause\", i think that it was worth it, because i wanted for everyone to be happy, i wanted everyone to enjoy using my bot, having few cool features, and missing others (because i\'m not the best at coding). And yes, someday, the bot will no longer exist, along with everything else in this world, it all ends in the end, but that doesnt mean you shouldn\'t make things anyway, because everyone deserves to be happy, and it feels even better if it\'s because of something that you made :)*')
                        .setColor('#7d77df')
                    msg.edit(embed5)
                }
                if(reaction.emoji.name === '6️⃣') {
                    const embed6 = new Discord.MessageEmbed()
        
                        .setAuthor('Thoughts - The never-ending movement of time', message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription('*We all know that, time passes, at quite a fast pace sometimes, and we all wish we had more time, and we all wish that we could go back in time to fix our mistakes. But you can\'t do that, \"time is always ticking\" and you can\'t do anything to stop it. But one thing that you can do is try to enjoy time to it\'s fullest, even if you don\'t have much of it, because if you don\'t, you\'ll really regret it, and it may sound a bit cliché, but its true! And yes, eventually, death will come to all of us because you can\'t stop that either but, at least that way you\'ll know that you\'ve had a good life with lots of ups and downs, and that you\'ve used every second to your advantage <3*')
                        .setColor('#7d77df')
                    msg.edit(embed6)
                }
                if(reaction.emoji.name === '7️⃣') {
                    const embed7 = new Discord.MessageEmbed()
        
                        .setAuthor('Thoughts - The potential of being skilled at everything', message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription('*You know, being talented is really cool and yet a rare thing to find in some people. Which is great, because what i learned is that it\'s better to be skilled than talented. If you\'re talented, you may be sucessful on the first go, but if you\'re not talented, you have to fail and fail and fail, but when you fail, you learn, and that pushes you forward into progressing and becoming skilled. And because you\'re skilled, you memorised the failing, the bad techniques, you know everything there is to know about doing that something. And what\'s even better is that, not everyone can be talented, very few people are, but everyone can be skilled, if given enough time, because as a wise man once said \"Its all about practice\".*')
                        .setColor('#7d77df')
                    msg.edit(embed7)
                }if(reaction.emoji.name === '8️⃣') {
                    const embed8 = new Discord.MessageEmbed()
        
                        .setAuthor('Thoughts - The process of overthinking', message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription('*Personally, i overthink a lot of things. But why do we do that, why are we overthinking things and how does it affect us? Well we overthink a lot because we fear regret. We fear that if we make the wrong choice, you won\'t be able to go back and you\'ll regret not choosing the better option. So we try our best to do that. And even if sometimes it works, other times overthinking makes things worse! Because it slows you down a lot, and you get deep in your thoughts and because the unknown has so many possibilities, we end up not even wanting to make a choice in the first place. But be careful, because if you notice that youre overthinking, you also need to think if it will help that situation or not, and it goes downhill from here. I\'m not exactly sure how you fix it though, but i tried to explain it as best as i could.*')
                        .setColor('#7d77df')
                    msg.edit(embed8)
                }if(reaction.emoji.name === '9️⃣') {
                    const embed9 = new Discord.MessageEmbed()
        
                        .setAuthor('Thoughts - The thought of being useless', message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription('*I\'m sure that all of us had at some point the thought of \"i feel so useless, what am i even doing with my life\". Well, the reason of why we have such a thought is because we feel like we are not doing enough for society, for family, and/or for ourselves. And that comes from more sources, such as seeing someone do something that to you seems very impressive, etc. However, the thought itself is useless, ironic isn\'t it? Because the people that you think are impressive are doing something that youre not able to do. Likewise, you literally CAN\'T be useless since you can do stuff that other people might not be able to, so don\'t feel useless, feel proud! But if you still think that a change needs to happen, don\'t hesitate, however i was mostly speaking of the thought of feeling useless <3*')
                        .setColor('#7d77df')
                    msg.edit(embed9)
                }
            })
        })
    }
}