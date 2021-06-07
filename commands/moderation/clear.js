const {prefix} = require('../../config.json')
module.exports = {
    name:'clear',
    description: "It deletes how many messages you want (as long as you\'re an admin), however you can\'t delete more than 100 messages",
    usage: `${prefix}clear (number)`,
    category: 'moderation',
    run: async (bot, message, args) => {
        let amount;

        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send('You don\'t have the permission to delete messages. (MANAGE_MESSAGES)')
        }else if(isNaN(args[0]) || parseInt(args[0]) <= 0) {
            message.channel.send('You didn\'t tell me how many messages to delete')
        }else if(message.deletable) {

            if(parseInt(args[0]) > 100) {
                amount = 100;
            }else {
                amount = parseInt(args[0]);
            }

            message.channel.bulkDelete(amount, true)
            .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages`)).catch(err)
        }
    }
}