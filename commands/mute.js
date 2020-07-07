module.exports = {
    name:'mute',
    description: "Mutes a user temporarily",
    execute(message, argument){
        const ms = require('ms');
        let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(argument[2]))
        
        if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send('You dont have permissions to use this command');

        if(!argument[1]) return message.channel.send('Please specify a member');

        if(!person) return message.channel.send('Please specify a member');
        
        let mainrole = message.guild.roles.cache.find(role => role.name === 'Member')
        let muterole = message.guild.roles.cache.find(role => role.name === 'BMuted')

        if(!muterole) return message.channel.send('Couldnt find the mute role');

        let time = argument[2];

        if(!time){
            return message.channel.send('You didnt specify the time');
        }
            person.roles.add(muterole.id);
            message.channel.send(`@${person.user.tag} has been muted for ${ms(ms(time))}`)
        

        setTimeout(function(){
            person.roles.remove(muterole.id);
            message.channel.send(`@${person.user.tag} has been unmuted`);

        }, ms(time));
    }
}