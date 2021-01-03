module.exports = {
    name:'blush',
    description: "The user blushes",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const cheerio = require('cheerio');
        const request = require('request');

        var option = {
            url: 'https://api.otakugifs.xyz/gif/',
            method: 'GET',
            headers: {
                'X-API-KEY': 'pj7g9seujJByserio0awmvx66W8fFtrboW9kVVNeu13yHbBgE3IsgNBS3rUuD8321l2CH3tST900dhEyd0qH9P2',
                ':action': 'blush'
            }
        }

        request(option, function(error, response, responseBody) {
            if(error) {
                return;
            }

            $ = cheerio.load(responseBody);
            var links = $('.image a.link');
            var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr('href'));

            if(!urls.length) {
                return;
            }

            if (!args[0]){
                const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} is blushing`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(urls[Math.floor(Math.random() * urls.length)])
                .setFooter('powered by otakugifs.xyz')
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }
        })
    }
}