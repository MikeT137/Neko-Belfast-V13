module.exports = {
    name:'pout',
    description: "The user pouts",
    run: async (bot, message, args) => {
        const author = message.author;
        const Discord = require('discord.js');
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/pout';

        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'pj7g9seujJByserio0awmvx66W8fFtrboW9kVVNeu13yHbBgE3IsgNBS3rUuD8321l2CH3tST900dhEyd0qH9P2',
            },
        }).then((res) =>
            res.json()
        ).then((json) => {
            if (!args[0]) {
                const embed = new Discord.MessageEmbed()
        
                .setAuthor(`${message.author.username} is pouting, such a tsundere`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(json.url)
                .setFooter('Powered by otakugifs.xyz')
                .setColor(0x4AEFBA)
                message.channel.send(embed)
            }
        })
    }
}