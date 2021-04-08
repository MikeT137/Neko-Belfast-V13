const {prefix} = require('../../config.json')
module.exports = {
    name:'unmute',
    description: "It unmutes a user that is muted, BUT you need to have a role called \"BMuted\", it\'s the only way it\'ll work'",
    usage: `${prefix}unmute (ping)`,
    category: 'moderation',
    run: async (bot, message, args) => {
        const ms = require('ms');
        let mainrole = message.guild.roles.cache.find(role => role.name === 'Member')
        let muterole = message.guild.roles.cache.find(role => role.name === 'BMuted')
        let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        
        if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send('You dont have permissions to use this command');
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