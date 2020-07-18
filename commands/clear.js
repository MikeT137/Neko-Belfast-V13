module.exports = {
    name:'clear',
    description: "Clears the ammount of message you want",
    run: async (bot, message, argument){
        if(!argument[1]) return message.reply('Error, please specify how many messages i should clear');
        message.channel.bulkDelete(argument[1]);
    }
}