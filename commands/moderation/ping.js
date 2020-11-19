const { Message } = require("discord.js")

module.exports = {
    name: 'ping',
    description: "Says the latency of the bot",
    run: async (bot, message, args) => {
        message.channel.send('Calculatting ping...')
        .then(result => {
            const ping = result.createdTimeStamp - message.createdTimeStamp;

            result.edit(`Bot latency: ${ping}`);
        })
    }
}