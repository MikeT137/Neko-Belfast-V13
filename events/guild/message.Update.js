module.exports = async (oldMessage, newMessage) => {
    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed()

    .setTitle('New message edited!')
    .setDescription(`**${oldMessage.author.tag} has edited a message in <#${oldMessage.channel.id}>**`)
    .addField('Old Content', oldMessage.content, true)
    .addField('New Content', newMessage.content, true)
    .setColor(0x4AEFBA)

    let channel = message.guild.channels.cache.find(ch => ch.name==='bot-log')
    if(!channel) return;

    channel.send(embed);
}