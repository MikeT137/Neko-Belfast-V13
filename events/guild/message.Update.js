module.exports = async (oldMessage, newMessage) => {
    const author = oldMessage.author;
    const embed = new Discord.MessageEmbed()

    .setTitle('New message edited!')
    .setDescription(`**${author.tag} has edited a message in <#${oldMessage.channel.id}>**`)
    .addField('Old Content', oldMessage.content, true)
    .addField('New Content', newMessage.content, true)
    .setColor(0x4AEFBA)

    let channel = message.guild.channels.cache.find(ch => ch.name==='bot-log')
    if(!channel) return;

    channel.send(embed);
}