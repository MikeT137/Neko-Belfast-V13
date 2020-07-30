module.exports = {
    name: 'invite',
    description: "Gives the user a link of the bot",
    run: async (bot, message, args) => {
        message.channel.send('If you want me to be in your server, here\'s the link: https://discord.com/oauth2/authorize?client_id=727093236954431488&scope=bot&permissions=2146958847')
    }
}