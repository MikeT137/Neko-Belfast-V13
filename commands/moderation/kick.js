const {prefix} = require('../../config.json')
module.exports = {
    name:'kick',
    description: "It kicks someone out of a server. Keep in mind:\n-the bot needs admin\n-you need admin as well\n-you can\'t kick someone that has admin\n-the bot needs to have a role higher than the person you are trying to kick(server settings -> roles)",
    usage: `${prefix}kick (ping)`,
    category: 'moderation',
    run: async (bot, message, args) => {
        const member = message.mentions.users.first();

        if(!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send('You dont have permissions to use this command');

        if(member) {
            const user = message.guild.member(member);

            if(user) {
                user.kick().then(() => {
                    message.channel.send(`Successfully kicked ${member.tag}`);
                });
            }else {
                message.channel.send('That member isnt in the server')
            }
        }else{
            message.channel.send('Please specify a member');
        }
    }
}