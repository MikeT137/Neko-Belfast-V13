const Discord = require("discord.js");
const fs = require("fs");
module.exports = {
    name:'warn',
    description: "Warns a user",
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Youre not allowed to use that command');

        let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        let warns = JSON.parse(fs.readFileSync("./warnings.json/", "utf8"));
        let reason = args.join(" ").slice(22);

        if(!user) return message.channel.send("You need to mention a member");
        if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cant warn a moderator");
        if(!reason) return message.channel.send('You need to specify a reason');
        if(!warns[user.id]) warns[user.id] = {
            warns: 0
        }
        warns[user.id].warns++;
        fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
            if(err) {
                console.log(err);
            }
        });
        let embed = new Discord.MessageEmbed()

        .addField('Warned member', `<@${user.id}>`)
        .addField('Number of warnings', warns[user.id].warns)
        .addField('Reason', reason)
        .setColor(0x4AEFBA)
        message.channel.send(embed);
    }
}