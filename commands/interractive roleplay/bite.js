module.exports = {
    name:'bite',
    description: "Bites a user",
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
                }else {
                    const embed = new Discord.MessageEmbed()
            
                        .setAuthor(`${message.author.username} bit ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(0, 1).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz')
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }
            }else {
                message.channel.send('You have to ping someone to bite them')
            }
        })
    }
}