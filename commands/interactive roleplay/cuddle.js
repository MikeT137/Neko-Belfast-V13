module.exports = {
    name:'cuddle',
    description: "It sends a cuddling gif",
    usage: 'b.cuddle (ping)',
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const {api_key} = require ('../../config.json')
        const person = message.mentions.users.first();
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/cuddle';

        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': api_key,
            },
        }).then((res) =>
            res.json()
        ).then((json) => {
            if(message.mentions.members.size >= 1) {
                message.delete();
                if(person.id == message.author.id) {
                    const embed = new Discord.MessageEmbed()
    
                        .setAuthor('Aww, its okay, belfast will give you some cuddles nya~', message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz')
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }else {
                    const embed = new Discord.MessageEmbed()
    
                        .setAuthor(`${message.author.username} is cuddling ${person.username}, so cute`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz')
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }
            }else {
                message.channel.send('You have to ping someone to cuddle them')
            }
        })
    }
}