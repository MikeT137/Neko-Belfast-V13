module.exports = {
    name:'pat',
    description: "Pats a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/pat';

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
                    const embed = new Discord.MessageEmbed()
    
                    .setAuthor('Aww, its okay, belfast will give you some pats nya~', message.author.displayAvatarURL({ dynamic: true }))
                    .setImage(json.url)
                    .setFooter('Powered by otakugifs.xyz')
                    .setColor(0x4AEFBA)
                    message.channel.send(embed);
                }else {
                    const embed = new Discord.MessageEmbed()
    
                    .setAuthor(`${message.author.username} is patting ${person.username}, so cute`, message.author.displayAvatarURL({ dynamic: true }))
                    .setImage(json.url)
                    .setFooter('Powered by otakugifs.xyz')
                    .setColor(0x4AEFBA)
                    message.channel.send(embed);
                }
            }else {
                message.channel.send('You have to ping someone to pat them')
            }
        })
    }
}