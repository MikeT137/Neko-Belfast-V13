const Discord = require('discord.js');

module.exports = bot =>{
    let status = ("b!help");

    setInterval(function(){
        bot.user.setActivity(status, {type:"WATCHING"});
    });
}