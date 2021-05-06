const {prefix} = require('../../config.json')
module.exports = {
    name:'mute',
    description: "It mutes a user temporarily, BUT you need to create a role called \"BMuted\", it\'s the only way it\'ll work: \`b.mute @(someone) 12s\`",
    usage: `${prefix}mute (ping) (number + time: s, m, h, d)`,
    category: 'moderation',
    run: async (bot, message, args) => {
        const ms = require('ms');
        const person = message.guild.member(message.mentions.users.first());
        
        if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send('You dont have permissions to use this command');
        if(!person) return message.channel.send('Please specify a member');
        
        let muterole = message.guild.roles.cache.find(role => role.name === 'BMuted')

        if(!muterole) return message.channel.send('Couldnt find the mute role');

        const time = args[1];

        if(!time){
            return message.channel.send('You didnt specify the time');
        }else{
        person.roles.add(muterole);
        message.channel.send(`@${person.user.tag} has been muted for ${ms(ms(time))}`)

        setTimeout(function(){
            person.roles.remove(muterole);
            message.channel.send(`@${person.user.tag}'s ${time} of being muted has ran out`);

        }, ms(time));
        }
    }
}