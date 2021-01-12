const {prefix} = require ('../../config.json')
var schedule = require('node-schedule');

module.exports = bot => {
    console.log('Neko Belfast is online!');

    let startTime = new Date('1 0 * * *');
    let endTime = new Date('59 23 * * *');

    const newyear = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 1 1 *'})
    const valentine = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 14 2 *'})
    const patrick = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 17 3 *'})
    const easter = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 8 4 *'})
    const bday = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 29 6 *'})
    const miku = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 16 9 *'})
    const halloween = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 31 10 *'})
    const thanks = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 25 11 *'})
    const xmas = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 25 12 *'})
    const test = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 12 1 *'})

    if(newyear) {
        bot.user.setActivity(`Happy New Year nya~! | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    }else if(valentine) {
        bot.user.setActivity(`Will you be my Valentine nya~? | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    }else if(patrick) {
        bot.user.setActivity(`Happy St. Patrick\'s Day nya~! | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    }else if(easter) {
        bot.user.setActivity(`Happy Easter nya~! | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    }else if(bday) {
        bot.user.setActivity(`It\'s my birthday nya~! | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    }else if(miku) {
        bot.user.setActivity(`Happy birthday Miku-senpai! | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    }else if(halloween) {
        bot.user.setActivity(`Have a spooky Halloween! Tee hee | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    }else if(thanks) {
        bot.user.setActivity(`Happy Thanksgiving nya~! | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    }else if(xmas) {
        bot.user.setActivity(`Merry Christmas nya! | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    }else if(test) {
        bot.user.setActivity(`just testing nya~ | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    }else {
        bot.user.setActivity(`over myaster | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    }

    /*Holidays
    Every other day - over myaster
    January 1st - Happy New Year nya~!
    February 14th - Will you be my Valentine nya~?
    March 17th - Happy St. Patrick\'s Day nya~!
    April 8th - Happy Easter nya~!
    June 29th - It\'s my birthday nya~!
    September 16th - Happy birthday Miku-senpai!
    October 31st - Have a spooky Halloween! Tee hee
    November 25th - Happy Thanksgiving nya~!
    December 25th - Merry Christmas nya!*/
}