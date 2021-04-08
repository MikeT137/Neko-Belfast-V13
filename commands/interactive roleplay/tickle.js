const {prefix} = require('../../config.json')
module.exports = {
    name:'tickle',
    description: "It sends a tickling gif",
    usage: `${prefix}tickle (ping)`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const {api_key} = require ('../../config.json')
        const person = message.mentions.users.first();
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/tickle';

        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': api_key,
            },
        }).then((res) =>
            res.json()
        ).then((json) => {
            if(message.mentions.members.size >= 1 && person.id != message.author.id) {
                message.delete();
                const embed = new Discord.MessageEmbed()
            
                    .setAuthor(`${message.author.username} is tickling ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(json.url)
                    .setFooter('Powered by otakugifs.xyz')
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else {
                message.channel.send('You have to ping someone to tickle them')
            }
        })
    }
}