module.exports = {
    name:'love',
    description: "The bot gives a nice message and snuggles the user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        if(!args[0]) {
            message.channel.send('You must ping someone to see the love-affinity level')
        }else if(message.mentions.members.size == 1) {
            if(person.id == message.author.id) {
                message.channel.send('You can\'t do this command to yourself');
            }else {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} and ${person.username} love eachother this much:`, message.author.displayAvatarURL({ dynamic: true }))
                    .setThumbnail(person.displayAvatarURL({dynamic: true}))
                    .addField(`💟 ${Math.floor(love)}%\n\n${loveLevel}`)
                    .setColor('#7d77df')
                message.channel.send(embed);
            }
        }
        /*const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/cuddle';

        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'pj7g9seujJByserio0awmvx66W8fFtrboW9kVVNeu13yHbBgE3IsgNBS3rUuD8321l2CH3tST900dhEyd0qH9P2',
            },
        }).then((res) =>
            res.json()
        ).then((json) => {
            if (!args[0]){
                const embed = new Discord.MessageEmbed()
    
                    .setAuthor(`Nyaa~, i love you ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setImage(json.url)
                    .setFooter('Powered by otakugifs.xyz')
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else if(args[0] || message.mentions.members.size >= 1) {
                if(person.id == message.author.id) {
                    message.channel.send('Yay! Always give appreciation and love to yourself nya~')
                }else {
                    const embed = new Discord.MessageEmbed()
            
                    .setAuthor(`${message.author.username} loves ${person.username}!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setImage(json.url)
                    .setFooter('Powered by otakugifs.xyz')
                    .setColor('#7d77df')
                    message.channel.send(embed);
                }
            }else return;
        })*/
    }
}