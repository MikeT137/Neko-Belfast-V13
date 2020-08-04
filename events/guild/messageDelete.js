const message = require("./message")

module.exports = async(message) => {
    const embed = new Discord.MessageEmbed()

    .setTitle('New message deleted!')
    .setDescription(`**The user ${message.author.tag}* has deleted a message in <#${message.channel.id}>*`)
    .addField('Content', message.content, true)

    let channel = message.guild.channels.cache.find(ch => ch.name==='bot-log' || 'logs' || 'staff-logs'|| '📈┊staff-logs')
    if(!channel) return;
    
    channel.send(embed);
}