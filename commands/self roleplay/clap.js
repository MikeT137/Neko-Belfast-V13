module.exports = {
    name:'clap',
    description: "The user claps",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/clap';

        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'pj7g9seujJByserio0awmvx66W8fFtrboW9kVVNeu13yHbBgE3IsgNBS3rUuD8321l2CH3tST900dhEyd0qH9P2',
            },
        }).then((res) =>
            res.json()
        ).then((json) => {
            if (!args[0]){
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} claps their hands`, message.author.displayAvatarURL({ dynamic: true }))
                    .setImage(random_clap[Math.floor(Math.random() * random_clap.length)])
                    .setFooter('Powered by otakugifs.xyz')
                    .setColor('#7d77df')
                message.channel.send(embed);
            }
        })
    }
}