module.exports = {
    name: 'ship',
    description: 'The user ships itself with another user, or ships two other users',
    run: async (bot, message, args) => {
        const mentions = message.mentions.users.first(2);
        const person = mentions[0];
        const person2 = mentions[1];

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        if(!args[0]) {
            message.channel.send('You have to ping someone for the command to work')
        }else if(message.mentions.members.size == 1) {
            if(person.id == message.author.id) {
                message.channel.send('You can\'t ship yourself');
            }else {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} and ${person.username} love eachother this much:`, message.author.displayAvatarURL({ dynamic: true }))
                    .setThumbnail(person.displayAvatarURL({dynamic: true}))
                    .addField(`💟 ${Math.floor(love)}%`, `${loveLevel}`)
                    .setColor('#7d77df')
                message.channel.send(embed);
            }
        }
        if(message.mentions.members.size == 2) {
            const embed = new Discord.MessageEmbed()

                    .setAuthor(`${person.username} and ${person2.username} love eachother this much:`, message.author.displayAvatarURL({ dynamic: true }))
                    .setThumbnail(person.displayAvatarURL({dynamic: true}))
                    .addField(`💟 ${Math.floor(love)}%`, `${loveLevel}`)
                    .setColor('#7d77df')
                message.channel.send(embed);
        }
    }
}