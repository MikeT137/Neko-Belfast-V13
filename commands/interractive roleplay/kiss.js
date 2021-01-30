module.exports = {
    name:'kiss',
    description: "Kisses a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const miku = '486276124549316619';
        const daisy = '212391059139985408';
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/kiss';

        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'pj7g9seujJByserio0awmvx66W8fFtrboW9kVVNeu13yHbBgE3IsgNBS3rUuD8321l2CH3tST900dhEyd0qH9P2',
            },
        }).then((res) =>
            res.json()
        ).then((json) => {
            if(message.mentions.members.size >= 1) {
                if(person.id == message.author.id) {
                    message.channel.send(`It\'s okay ${message.author.username}! I\'m sure you\'ll get someone to be by your side! Stay strong nya~`)
                /*}else if((message.author.id = miku) && (person.id = daisy)) {
                    const embed = new Discord.MessageEmbed()
            
                    .setAuthor(`Love you daisy X3, hope you like your little gift`, message.author.displayAvatarURL({ dynamic: true }))
                    .setImage(json.url)
                    .setFooter('Powered by otakugifs.xyz')
                    .setColor('#7d77df')
                    message.channel.send(embed);
                }else if((message.author.id = daisy) && (person.id = miku)) {
                    const embed = new Discord.MessageEmbed()
            
                    .setAuthor(`ask daisy`, message.author.displayAvatarURL({ dynamic: true }))
                    .setImage(json.url)
                    .setFooter('Powered by otakugifs.xyz')
                    .setColor('#7d77df')
                    message.channel.send(embed);*/
                }else {
                    const embed = new Discord.MessageEmbed()
            
                    .setAuthor(`${message.author.username} gave ${person.username} a kiss`, message.author.displayAvatarURL({ dynamic: true }))
                    .setImage(json.url)
                    .setFooter('Powered by otakugifs.xyz')
                    .setColor('#7d77df')
                    message.channel.send(embed);
                }
            }else {
                message.channel.send('You have to ping someone to kiss them')
            }
        })
    }
}