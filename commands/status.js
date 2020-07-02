const Discord = require('discord.js');

module.exports = bot => {
    bot.user.setPresence({
        status: 'online',
        activity: {
            name: 'b!help',
            type: 'STREAMING',
        }
    })
}