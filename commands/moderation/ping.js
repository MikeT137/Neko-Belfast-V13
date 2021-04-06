module.exports = {
    name: 'ping',
    description: "It shows the latency of the bot AKA how fast the bot is responding to user input",
    usage: 'b.ping',
    category: 'moderation',
    run: async (bot, message, args) => {
        message.channel.send('Calculating ping...')
        .then((result) => {
            const ping = result.createdTimestamp - message.createdTimestamp;

            result.edit(`My response time: \`${ping}ms\``);
        })
    }
}