const {prefix} = require ('../../config.json')

module.exports = bot => {
    console.log('Neko Belfast is online!');
    setInterval(function(){
        bot.user.setActivity(`${bot.guilds.cache.size} servers | use b.help for commands`, {type: 'WATCHING'}).catch(console.error);
    }, 10000)
    var schedule = require('node-schedule');

    var j = schedule.scheduleJob('26 * * * *', function(){
        bot.user.setActivity(`awoo`).catch(console.error)
    });
}