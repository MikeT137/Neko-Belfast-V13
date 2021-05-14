const {prefix} = require('../../config.json')
module.exports = {
    name:'mute',
    description: "It mutes a user temporarily, however, you still have to set the permissions of the \"BMuted\" role (which you can get by using the \`muterole\` command) in the channel or category to \`SEND_MESSAGES: false\`. (\`b.mute @someone 12s\`)",
    usage: `${prefix}mute (ping) (number + time: s, m, h, d)`,
    category: 'moderation',
    run: async (bot, message, args) => {
        const ms = require('ms');
        const person = message.mentions.members.first()
        
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You don\'t have permissions to use this command. (MANAGE_ROLES)');
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