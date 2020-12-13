module.exports = {
    name:'shoot',
    description: "Shoots at a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_shot = [
            
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send('NO')
            }else {
                const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} just shot ${person.username}, so brutal`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(random_shot[Math.floor(Math.random() * random_shot.length)])
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to shoot them')
        }
    }
}