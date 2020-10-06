module.exports = {
    name:'clear',
    description: "Clears the ammount of message you want",
    run: async (bot, message, args) => {
        const amount = args.join(' '); // Amount of messages which should be deleted

        if (!amount) return message.channel.send('You haven\'t given an amount of messages which should be deleted!');
        if (isNaN(amount)) return message.reply('The amount parameter isn`t a number!');

        if (amount > 100) return message.channel.send('You can`t delete more than 100 messages at once!');
        if (amount < 1) return message.channel.send('You have to delete at least 1 message!');

        await message.channel.messages.fetch({ limit: amount }).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}