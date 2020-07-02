const Discord = require('discord.js');

module.exports = bot => {
    setInterval(function() {
        let status = ("b!help");
        bot.user.setActivity(status, {type:"WATCHING "});
    });
}