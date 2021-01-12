const {prefix} = require ('../../config.json')
var schedule = require('node-schedule');

module.exports = bot => {
    console.log('Neko Belfast is online!');

    var normalday = schedule.scheduleJob('* * * * *', function(){
        bot.user.setActivity(`over myaster | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    })
    var newyear = schedule.scheduleJob({month: 1, day: 1}, function(){
        bot.user.setActivity(`Happy New Year nya~! | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    })
    var valentine = schedule.scheduleJob({month: 2, day: 14}, function(){
        bot.user.setActivity(`Will you be my Valentine nya~? | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    })
    var patrick = schedule.scheduleJob({month: 3, day: 17}, function(){
        bot.user.setActivity(`Happy St. Patrick's Day nya~! | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    })
    var easter = schedule.scheduleJob({month: 4, day: 8}, function(){
        bot.user.setActivity(`Happy Easter nya~! | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    })
    var bday = schedule.scheduleJob({month: 6, day: 29}, function(){
        bot.user.setActivity(`It\'s my birthday nya~! | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    })
    var miku = schedule.scheduleJob({month: 9, day: 16}, function(){
        bot.user.setActivity(`Happy birthday Miku-senpai! | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    })
    var halloween = schedule.scheduleJob({month: 10, day: 31}, function(){
        bot.user.setActivity(`Have a spooky Halloween! Tee hee | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    })
    var thanks = schedule.scheduleJob({month: 11, day: 25}, function(){
        bot.user.setActivity(`Happy Thanksgiving nya~! | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    })
    var xmas = schedule.scheduleJob({month: 12, day: 25}, function(){
        bot.user.setActivity(`Merry Christmas nya! | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    })
    var test = schedule.scheduleJob({month: 1, day: 12}, function(){
        bot.user.setActivity(`testing something nya! | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    })

    /*Holidays
    Every other day - over myaster
    January 1st - Happy New Year nya~!
    February 14th - Will you be my Valentine nya~?
    March 17th - Happy St. Patrick's Day nya~!
    April 8th - Happy Easter nya~!
    June 29th - It\'s my birthday nya~!
    September 16th - Happy birthday Miku-senpai!
    October 31st - Have a spooky Halloween! Tee hee
    November 25th - Happy Thanksgiving nya~!
    December 25th - Merry Christmas nya!*/
}