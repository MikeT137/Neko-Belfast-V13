const { Message } = require("discord.js")

module.exports = {
    name: 'ping',
    description: "Says the latency of the bot",
    run: async (bot, message, args) => {
        message.channel.send('Calculating ping...')
        .then((result) => {
            const ping = result.createdTimestamp - message.createdTimestamp;

            result.edit(`My response time: \`${ping}ms\``);
        })
    }
}