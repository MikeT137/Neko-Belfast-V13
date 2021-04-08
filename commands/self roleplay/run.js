const {prefix} = require('../../config.json')
module.exports = {
    name: 'run',
    description: "It sends a running gif",
    usage: `${prefix}run`,
    category: 'self roleplay',
    run: async(bot, message, args) => {
        const Discord = require('discord.js');
        const {api_key} = require ('../../config.json')
        const person = message.mentions.users.first();
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/run';
        message.delete();
        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': api_key,
            },
        }).then((res) =>
            res.json()
        ).then((json) => {
            if(message.mentions.members.size >= 1 && person.id != message.author.id) {
                    const embed = new Discord.MessageEmbed()
            
                        .setAuthor(`${message.author.username} is running away from ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz')
                        .setColor('#7d77df')
                    message.channel.send(embed);
            }else {
                const embed = new Discord.MessageEmbed()
            
                    .setAuthor(`${message.author.username} is running away`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.join(' ')}`)
                    .setImage(json.url)
                    .setFooter('Powered by otakugifs.xyz')
                    .setColor('#7d77df')
                message.channel.send(embed)
            }
        })
    }
}