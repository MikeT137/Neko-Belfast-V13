const {prefix} = require('../../config.json')
module.exports = {
    name:'lick',
    description: "It sends a licking gif",
    usage: `${prefix}lick @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const {api_key} = require ('../../config.json')
        const person = message.mentions.users.first();
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/lick';

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
                    message.channel.send('Just like a kitty aren\'t you? I\'m proud of you nya~')
                }else if(person.id === '727093236954431488') {
                    message.delete();
                    const embed = new Discord.MessageEmbed()
            
                        .setAuthor(`I shall fight fire with fire nya!!`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }else {
                    message.delete();
                    const embed = new Discord.MessageEmbed()
            
                        .setAuthor(`${message.author.username} is licking ${person.username} O///O`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }
            }else {
                message.channel.send('You have to ping someone to lick them')
            }
        })
    }
}