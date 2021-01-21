module.exports = {
    name:'marry',
    description: "A user can marry another user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const spouse = bot.life.get(message.author.id, 'spouse')
        const uSpouse = bot.life.get(person.id, 'spouse')
        const proposer = message.guild.members.cache.find(p => p.id === proposerID)
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/hug';

        if (spouse !== 0) {
            message.channel.send('You cannot have more than one spouse.')
        }else if (uSpouse !== 0) {
            message.channel.send(`${person.usernmae} already has a spouse.`)
        }else if(args[0] || message.mentions.members.size == 1) {
            message.channel.send(`${person.username}, ${message.author.username} wants to marry you!\n\`React with :white_check_mark: to accept, or :x: to decline (you have one minute to respond)\``)
            .then(msg => {
                msg.react('✅'),
                msg.react('❌')

                const filter = (reaction, user) => {
                    return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
                }

                msg.awaitReactions(filter, { max: 1 })
                .then(collected => {
                    const reaction = collected.first();
                    if(reaction.emoji.name === '✅') {
                        message.channel.send(`${message.author.username} and ${person.username} are now married! :partying_face:`)
                        bot.life.set(proposerID, user.id, 'spouse')
                        bot.life.set(user.id, proposerID, 'spouse')
                    }else if(reaction.emoji.name === '❌') {
                        message.channel.send(`${person.username} declined! :confused:`)
                    }else return;
                }, 60000)
            })
        }else if(!args[0]) {
            message.channel.send('You must ping someone to marry them')
        }else if (message.author.id == person.id) {
            fetch(url, {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'pj7g9seujJByserio0awmvx66W8fFtrboW9kVVNeu13yHbBgE3IsgNBS3rUuD8321l2CH3tST900dhEyd0qH9P2',
                },
            }).then((res) =>
                res.json()
            ).then((json) => {
                const embed = new Discord.MessageEmbed()
    
                    .setAuthor(`It\'s okay ${message.author.username}, i\'m sure you\'ll find someone eventually`, message.author.displayAvatarURL({ dynamic: true }))
                    .setImage(json.url)
                    .setFooter('Powered by otakugifs.xyz')
                    .setColor('#7d77df')
                message.channel.send(embed);
            })
        }else return;
    }
}