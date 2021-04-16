const {prefix} = require('../../config.json')
module.exports = {
    name:'bite',
    description: "It sends a biting gif",
    usage: `${prefix}bite (ping)`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const {api_key} = require ('../../config.json')
        const person = message.mentions.users.first();
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/bite';
        
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
                    message.channel.send('NYAA! Don\'t bite yourself!')
                }else if(person.id === '727093236954431488') {
                    message.delete();
                    const embed = new Discord.MessageEmbed()
            
                        .setAuthor(`NYA! T-That hurts ${message.author.username}!!`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }else {
                    message.delete();
                    const embed2 = new Discord.MessageEmbed()
            
                        .setAuthor(`${message.author.username} bit ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embed2);
                }
            }else {
                message.channel.send('You have to ping someone to bite them')
            }
        })
    }
}