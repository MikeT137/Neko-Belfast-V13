module.exports = {
    name:'mute',
    description: "Mutes a user temporarily",
    run: async (bot, message, args) => {
        const ms = require('ms');
        const person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        
        if(!message.member.hasPermission("MANAGE_MESSAGES") || !message.guild.owner) return message.channel.send('You dont have permissions to use this command');
        if(!person) return message.channel.send('Please specify a member');
        
        let muterole = message.guild.roles.cache.find(role => role.name === ['BMuted'])

        if(!muterole) return message.channel.send('Couldnt find the mute role');

        const time = args[1];

        if(!time){
            return message.channel.send('You didnt specify the time');
        }else{
        person.roles.add(muterole.id);
        message.channel.send(`@${person.user.tag} has been muted for ${ms(ms(time))}`)

        setTimeout(function(){
            person.roles.remove(muterole.id);
            message.channel.send(`@${person.user.tag}'s ${time} of being muted has ran out`);

        }, ms(time));
        }
    }
}