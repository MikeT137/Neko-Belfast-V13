module.exports = {
    name:'mute',
    description: "Mutes a user temporarily",
    execute(message, argument){
        const ms = require('ms');
        
        let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(argument[2]))
        if(!person) return message.reply('I cant find that member');
        
        let mainrole = message.guild.roles.cache.find(role => role.name === 'Member')
        let muterole = message.guild.roles.cache.find(role => role.name === 'BMuted')

        if(!muterole) return message.reply('Couldnt find the mute role');

        let time = argument[2];

        if(!time){
            return message.reply('You didnt specify the time');
        }
            person.roles.add(muterole.id);
            message.channel.send(`@${person.user.tag} has been muted for ${ms(ms(time))}`)
        

        setTimeout(function(){
            person.roles.remove(muterole.id);
            message.channel.send(`@${person.user.tag} has been unmuted`);

        }, ms(time));
    }
}