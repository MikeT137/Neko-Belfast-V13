module.exports = {
    name:'unmute',
    description: "Unmutes a user",
    execute(message, argument){
        const ms = require('ms');
        let mainrole = message.guild.roles.cache.find(role => role.name === 'Member')
        let muterole = message.guild.roles.cache.find(role => role.name === 'BMuted')
        let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(argument[2]))
        
        if (!person) {
            message.channel.send('Please specify a muted member')
        }

        if(!muterole) {
            return message.channel.send('Couldnt find the mute role');
        }
        
        person.roles.remove(muterole.id);
        message.channel.send(`@${person.user.tag} has been unmuted`);
        
    }
}