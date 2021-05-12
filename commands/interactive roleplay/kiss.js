const {prefix} = require('../../config.json')
module.exports = {
    name:'kiss',
    description: "It sends a kissing gif",
    usage: `${prefix}kiss (ping)`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const {api_key} = require ('../../config.json')
        const person = message.mentions.users.first();
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/kiss';

        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': api_key,
            },
        }).then((res) =>
            res.json()
        ).then((json) => {
            if(message.mentions.members.size >= 1) {
                if(person.id == message.author.id) {
                    message.channel.send(`It\'s okay ${message.author.username}! I\'m sure you\'ll get someone to be by your side! Stay strong nya~`)
                }else if(person.id === '727093236954431488') {
                    message.delete();
                    const embed = new Discord.MessageEmbed()
            
                        .setAuthor(`M-Master, not in front of everyone!!`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }else if(message.author.id == '486276124549316619' && person.id == '539141373425876993'){
                    message.delete();
                    const embedJ = new Discord.MessageEmbed()
            
                        .setAuthor(`I love you so much, my cute femboy gf <3`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embedJ);
                }else if(message.author.id == '539141373425876993' && person.id == '486276124549316619') {
                    message.delete();
                    const embedJ = new Discord.MessageEmbed()
            
                        .setAuthor(`I love you so much, my cute femboy gf <3`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embedJ);
                }else {
                    message.delete();
                    const embed2 = new Discord.MessageEmbed()
            
                        .setAuthor(`${message.author.username} gave ${person.username} a kiss`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embed2);
                }
            }else {
                message.channel.send('You have to ping someone to kiss them')
            }
        })
    }
}