const {prefix} = require ('../../config.json')
//var schedule = require('node-schedule');

module.exports = bot => {
    console.log('Neko Belfast is online!');
    setInterval(function(){
        bot.user.setActivity(`${bot.guilds.cache.size} servers | use b.help for commands`, {type: 'WATCHING'}).catch(console.error);
    }, 10000)

    //Holidays
    /*const newyear = schedule.scheduleJob({month:1, date:1}, function(){
        bot.user.setActivity(`Happy New Year nya~!`, {type: 'WATCHING'}).catch(console.error)
    });
    const valentine = schedule.scheduleJob({month:2, date:14}, function(){
        bot.user.setActivity(`Will you be my Valentine nya~?`, {type: 'WATCHING'}).catch(console.error)
    });
    const patrick = schedule.scheduleJob({month:3, date:17}, function(){
        bot.user.setActivity(`Happy St. Patrick's Day nya~!`, {type: 'WATCHING'}).catch(console.error)
    });
    const easter = schedule.scheduleJob({month:4, date: 8}, function(){
        bot.user.setActivity(`Happy Easter nya~!`, {type: 'WATCHING'}).catch(console.error)
    });
    const mother = schedule.scheduleJob({month:5, date:11}, function(){
        bot.user.setActivity(`Happy Mother's Day nya~!`, {type: 'WATCHING'}).catch(console.error)
    });
    const father = schedule.scheduleJob({month:6, date:18}, function(){
        bot.user.setActivity(`Happy Father's Day nya~!`, {type: 'WATCHING'}).catch(console.error)
    });
    const belfast = schedule.scheduleJob({month:6, date:29}, function(){
        bot.user.setActivity(`It's my birthday nya~!`, {type: 'WATCHING'}).catch(console.error)
    });
    const miku = schedule.scheduleJob({month:9, date:16}, function(){
        bot.user.setActivity(`Happy birthday Miku-senpai!`, {type: 'WATCHING'}).catch(console.error)
    });
    const halloween = schedule.scheduleJob({month:10, date:31}, function(){
        bot.user.setActivity(`Have a spooky Halloween! Tee hee`, {type: 'WATCHING'}).catch(console.error)
    });
    const thanks = schedule.scheduleJob({month:11, date:25}, function(){
        bot.user.setActivity(`Happy Thanksgiving nya~!`, {type: 'WATCHING'}).catch(console.error)
    });
    const xmas = schedule.scheduleJob({month:12, date:25}, function(){
        bot.user.setActivity(`Merry Christmas nya!`, {type: 'WATCHING'}).catch(console.error)
    });*/
}