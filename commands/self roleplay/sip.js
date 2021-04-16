const {prefix} = require('../../config.json')
module.exports = {
    name:'sip',
    description: "It sends a sipping gif",
    usage: `${prefix}sip`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const {api_key} = require ('../../config.json')
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/sip';
        message.delete();
        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': api_key,
            },
        }).then((res) =>
            res.json()
        ).then((json) => {
            const embed = new Discord.MessageEmbed()
        
                .setAuthor(`${message.author.username} is sipping from a cup of tea`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`${args.join(' ')}`)
                .setImage(json.url)
                .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                .setColor('#7d77df')
            message.channel.send(embed)
        })
    }
}