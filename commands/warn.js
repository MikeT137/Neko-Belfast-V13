const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');

module.exports = {
    name:'warn',
    description: "Warns a user",
    execute(message, argument){
        const member = message.mentions.members.first();
        let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"))

        if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send('You dont have permissoin to do that');
        if(!member) return message.channel.send('I couldnt find that member');
        if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('');

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

        message.channel.send(`${message.author.username} has been warned for the ${warns[member.id.warns]} time\nReason: ${reason}`)
    }
}