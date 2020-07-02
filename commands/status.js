const Discord = require('discord.js');

module.exports = bot => {
    setInterval(function() {
        let status = "b!help";
        bot.user.setActivity(status, {type:"Playing"});
    }, 9999999999999999999999999)
}