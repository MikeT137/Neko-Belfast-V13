const {prefix} = require('../../config.json')
module.exports = {
    name:'feed',
    description: "It sends a feeding gif",
    usage: `${prefix}feed @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const {api_key} = require ('../../config.json')
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/nom';
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
                if(person.id === '727093236954431488') {
                    const embed = new Discord.MessageEmbed()

                        .setAuthor(`Aww, thank you ${message.author.username}. I'll gladly eat the food you give me nya.`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }else if(person.id == message.author.id) {
                    const embed2 = new Discord.MessageEmbed()

                        .setAuthor(`${message.author.username} is nomming on their food!`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embed2);
                }else {
                    const embed3 = new Discord.MessageEmbed()

                        .setAuthor(`${message.author.username} is feeding ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embed3);
                }
            }else {
                message.channel.send('You have to ping someone to feed them')
            }
        })
    }
}