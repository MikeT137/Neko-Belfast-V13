const {prefix} = require('../../config.json')
module.exports = {
    name:'kick',
    description: "It kicks someone out of a server and deletes all the messages they sent in the last 3 days. Keep in mind:\n-the reason is optional\n-the bot needs admin\n-you need admin as well\n-you can\'t kick someone that has admin\n-the bot needs to have a role higher than the person you are trying to kick(server settings -> roles)",
    usage: `${prefix}kick @ping reason`,
    category: 'moderation',
    run: async (bot, message, args) => {
        const member = message.mentions.users.first();
        const reason = args.slice(1).join(' ');

        if(!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send('You don\'t have permissions to use this command. (KICK_MEMBERS)');
        }else{
            if(!member) {
                message.channel.send('Please specify a member.');
            }else if(member.id == message.author.id) {
                message.channel.send('You can\'t use this command on yourself.')
            }else {
                const user = message.guild.member(member);

                if(user) {
                    user.kick({days: 3, reason: reason}).then(() => {
                        message.channel.send(`Successfully kicked ${member.tag}`);
                    }).catch(error => console.log(`Oops, something went wrong:\n${error}`))
                }else {
                    message.channel.send('That member isn\'t in the server.')
                }
            }
        }
    }
}