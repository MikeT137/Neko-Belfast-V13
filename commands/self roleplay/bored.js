module.exports = {
    name:'bored',
    description: "The user is bored",
    run: async (bot, message, args) => {
        const author = message.author;
        const Discord = require('discord.js');
        const random_bored = [
            'https://www.pinterest.at/pin/808325833102707555/?amp_client_id=CLIENT_ID(_)&mweb_unauth_id={{default.session}}&amp_url=https%3A%2F%2Fwww.pinterest.at%2Famp%2Fpin%2F808325833102707555%2F&from_amp_pin_page=true',
            'https://media1.tenor.com/images/4b84b1b5b40033e0a3a0bb2e22b7230d/tenor.gif?itemid=16728079',
            'https://ro.pinterest.com/pin/813392382687675938/',
            'https://tenor.com/view/anime-boring-bored-whatever-so-what-gif-8118376',
            'https://www.pinterest.pt/pin/53832158023010882/?send=true',
            'https://imgur.com/gallery/EzAWv47',
            'https://picsart.com/i/176650305000202',
            'https://reactionanime.blogspot.com/2014/01/bored-gif-reaction-anime.html',
            'http://www.lowgif.com/view.html',
            'https://gifer.com/en/Kntx'
        ]
        if (!args[0]){
            const embed = new Discord.MessageEmbed()

            .setAuthor(`${author.username} is bored`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(random_bored[Math.floor(Math.random() * random_bored.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}