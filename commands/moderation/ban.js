const {prefix} = require('../../config.json')
module.exports = {
    name:'ban',
    description: "It bans someone out of a server and deletes all the messages they sent in the last 3 days. Keep in mind:\n-the reason is optional\n-the bot needs admin\n-you need admin as well\n-you can\'t ban someone that has admin\n-the bot needs to have a role higher than the person you are trying to ban(server settings -> roles)",
    usage: `${prefix}ban @ping reason`,
    category: 'moderation',
    run: async (bot, message, args) => {
        const member = message.mentions.users.first();

        if(!message.member.hasPermission("BAN_MEMBERS")) {
            message.channel.send('You don\'t have permissions to use this command. (BAN_MEMBERS)');
        }else {
            if(!member) {
                message.channel.send('Please specify a member.');
            }else if(member.id == message.author.id) {
                message.channel.send('You can\'t use this command on yourself.')
            }else {
                const user = message.guild.member(member);

                if(user) {
                    user.ban({days: 3, reason: args.slice(1).join(' ')}).then(() => {
                        message.channel.send(`Successfully banned ${member.tag}\nUser ID: ${member.id}`);
                    }).catch(error => console.log(`Oops, something went wrong:\n${error}`))
                }else {
                    message.channel.send('That member isn\'t in the server')
                }
            }
        }
    }
}