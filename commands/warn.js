const fs = require('fs');
const ms = require('ms');
module.exports.run = async (bot, message, argument) => {
    const member = message.mentions.members.first();
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"))

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send('You dont have permissoin to do that');
    if(!member) return message.channel.send('I couldnt find that member');
    if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You cant warn a moderator');

    let reason = argument.join(" ").slice(22);

    if(!warns[member.id]) warns[member.id] = {
    warns: 0
    };
    warns[member.id].warn++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (error) => {
        if(error) {
            console.log(error)
        } 
    });

    let warnEmbed = new Discord.MessageEmbed()

    .setTitle('Warnings')
    .addField('Warned user', member)
    .addField('Number of warns', warns[member.id].warns)
    .addField('Reason', reason)
    .setColor(0x4AEFBA)
    message.channel.send(embed);
}