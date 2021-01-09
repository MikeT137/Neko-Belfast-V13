module.exports = {
    name:'clear',
    description: "Clears the ammount of message you want",
    run: async (bot, message, args) => {
        let amount;

        if(message.deletable) {
            message.delete();
        }else if(!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send('You cant delete messages')
        }else if(isNaN(args[0]) || parseInt(args[0]) <= 0) {
            message.channel.send('You didn\'t tell me how many messages to delete')
        }else {
            if(parseInt(args[0]) > 100) {
                amount = 100;
            }else {
                amount = parseInt(args[0]);
            }
            message.channel.bulkDelete(amount, true)
            .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages`))
            }
    }
}