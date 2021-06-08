const {prefix} = require('../../config.json')
module.exports = {
    name: 'ping',
    description: "It shows the latency of the bot AKA how fast the bot is responding to user input",
    usage: `${prefix}ping`,
    category: 'moderation',
    run: async (bot, message, args) => {
        message.channel.send('Calculating ping...')
        .then((result) => {
            const ping = result.createdTimestamp - message.createdTimestamp;

            result.edit(`My response time: \`${ping}ms\``);
        }).catch(error => console.log(`Oops, something went wrong:\n${error}`))
    }
}