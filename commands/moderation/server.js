module.exports = {
    name: 'server',
    description: "Gives the user a link of the server of the bot",
    run: async (bot, message, args) => {
        message.channel.send('Join my server please!! https://discord.gg/k2GuBMZ')
    }
}