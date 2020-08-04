module.exports = async (message) => {
    const embed = new Discord.MessageEmbed()

    .setTitle('New message deleted!')
    .setDescription(`**${message.author.tag} has deleted a message in <#${message.channel.id}>**`)
    .addField('Content', message.content, true)
    .setColor(0x4AEFBA)

    let channel = message.guild.channels.cache.find(ch => ch.name==='bot-log')
    if(!channel) return;

    channel.send(embed);
}