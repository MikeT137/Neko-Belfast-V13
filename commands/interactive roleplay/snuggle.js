const {prefix} = require('../../config.json')
module.exports = {
    name:'snuggle',
    description: "It sends a snuggling gif",
    usage: `${prefix}snuggle @ping`,
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
    
                        .setAuthor('Aww, its okay, belfast will give you some snuggles nya~', message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }else if(person.id === '727093236954431488') {
                    const embed2 = new Discord.MessageEmbed()
    
                        .setAuthor('Thank you master, you always make me feel good nyaa~', message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embed2);
                }else {
                    const embed = new Discord.MessageEmbed()
    
                        .setAuthor(`${message.author.username} is snuggling ${person.username}, so cute`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }
            }else {
                message.channel.send('You have to ping someone to snuggle them')
            }
        })
    }
}