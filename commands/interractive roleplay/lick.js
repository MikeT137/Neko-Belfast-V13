module.exports = {
    name:'lick',
    description: "Licks a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/lick';

        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'pj7g9seujJByserio0awmvx66W8fFtrboW9kVVNeu13yHbBgE3IsgNBS3rUuD8321l2CH3tST900dhEyd0qH9P2',
            },
        }).then((res) =>
            res.json()
        ).then((json) => {
            if(message.mentions.members.size >= 1) {
                if(person.id == message.author.id) {
                    message.channel.send('Just like a kitty aren\'t you? I\'m proud of you nya~')
                }else {
                    const embed = new Discord.MessageEmbed()
            
                    .setAuthor(`${message.author.username} is licking ${person.username} O///O`, message.author.displayAvatarURL({ dynamic: true }))
                    .setImage(json.url)
                    .setFooter('Powered by otakugifs.xyz')
                    .setColor(0x4AEFBA)
                    message.channel.send(embed);
                }
            }else {
                message.channel.send('You have to ping someone to lick them')
            }
        })
    }
}