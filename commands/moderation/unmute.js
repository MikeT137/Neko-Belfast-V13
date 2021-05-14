const {prefix} = require('../../config.json')
module.exports = {
    name:'unmute',
    description: "It unmutes a user that is muted, however, you still need to have the role called \"BMuted\" (which you can get by using the \`muterole\` command).",
    usage: `${prefix}unmute (ping)`,
    category: 'moderation',
    run: async (bot, message, args) => {
        let muterole = message.guild.roles.cache.find(role => role.name === 'BMuted')
        let person = message.mentions.members.first()
        
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You don\'t have permissions to use this command. (MANAGE_ROLES)');
        if (!person) {
            message.channel.send('Please specify a muted member')
        }else if(!muterole) {
            message.channel.send('Couldnt find the mute role');
        }else {
            person.roles.remove(muterole);
            message.channel.send(`@${person.user.tag} has been unmuted`);
        }
    }
}