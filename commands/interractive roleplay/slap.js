module.exports = {
    name:'slap',
    description: "Slaps a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/cry';
        const url2 = 'https://api.otakugifs.xyz/gif/slap';

        fetch(url, url2, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'pj7g9seujJByserio0awmvx66W8fFtrboW9kVVNeu13yHbBgE3IsgNBS3rUuD8321l2CH3tST900dhEyd0qH9P2',
            },
        }).then((res) =>
            res.json()
        ).then((json) => {
            if(message.mentions.members.size >= 1) {
                if(person.id == message.author.id) {
                    const embed = new Discord.MessageEmbed()
    
                    .setAuthor('Dont do that nya!! Dont hurt yourself please..', message.author.displayAvatarURL({ dynamic: true }))
                    .setImage(json.url)
                    .setFooter('Powered by otakugifs.xyz')
                    .setColor(0x4AEFBA)
                    message.channel.send(embed);
                }else {
                    const embed = new Discord.MessageEmbed()
    
                    .setAuthor(`${message.author.username} is slapping ${person.username}, so violent`, message.author.displayAvatarURL({ dynamic: true }))
                    .setImage(json.url2)
                    .setFooter('Powered by otakugifs.xyz')
                    .setColor(0x4AEFBA)
                    message.channel.send(embed);
                }
            }else {
                message.channel.send('You have to ping someone to slap them')
            }
        })
    }
}