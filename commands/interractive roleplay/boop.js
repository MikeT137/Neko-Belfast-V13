module.exports = {
    name:'boop',
    description: "Boops a user's nose",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const randomPuppy = require('random-puppy');
        const person = message.mentions.users.first();
        const boop = 'https://tenor.com/search/anime-boop-gifs';
        const random = boop[Math.floor(Math.random() * boop.length)];
        const img = await randomPuppy(random);
        
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send('Eh? Why did you boop yourself?')
            }else {
                const embed = new Discord.MessageEmbed()
        
                .setAuthor(`${message.author.username} booped ${person.username}'s nose !`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(img)
                .setURL(boop)
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to boop them')
        }
    }
}