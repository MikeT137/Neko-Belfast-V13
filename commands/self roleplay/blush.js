const {prefix} = require('../../config.json')
module.exports = {
    name:'blush',
    description: "It sends a blushing gif",
    usage: `${prefix}blush`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const {api_key} = require ('../../config.json')
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/blush';
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
        
                .setAuthor(`${message.author.username} is blushing`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`${args.join(' ')}`)
                .setImage(json.url)
                .setFooter(`${client.emojis.cache.get("832617295246917642")} Powered by otakugifs.xyz`)
                .setColor('#7d77df')
            message.channel.send(embed)
        })
    }
}