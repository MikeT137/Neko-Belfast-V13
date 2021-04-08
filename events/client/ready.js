const {prefix} = require('../../config.json')
var schedule = require('node-schedule');

module.exports = bot => {
    console.log('Neko Belfast is online!');

    const startTime = new Date('1 0 * * *');
    const endTime = new Date('59 23 * * *');

    const newyear = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 1 1 *'})
    const valentine = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 14 2 *'})
    const easter = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 8 4 *'})
    const bel = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 29 6 *'})
    const miku = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 16 9 *'})
    const halloween = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 31 10 *'})
    const thanks = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 25 11 *'})
    const xmas = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 25 12 *'})
    /*
    Holidays

    January 1st - Happy New Year nya~!
    February 14th - Will you be my Valentine?
    April 8th - Happy Easter nya~!
    June 29th - It\'s my birthday nya~!
    September 16th - Happy birthday Miku-senpai!
    October 31st - Have a spooky Halloween tee hee
    November 25th - Happy Thanksgiving nya~!
    December 25th - Merry Xmas nya!

    Every other day - with my tail nya~
    */
   if(newyear) {
        bot.user.setActivity(`Happy New Year nya~! | ${prefix}help`, {type: 'PLAYING'}).catch(console.error);
   }else if(valentine) {
        bot.user.setActivity(`Will you be my Valentine? | ${prefix}help`, {type: 'PLAYING'}).catch(console.error);
   }else if(easter) {
        bot.user.setActivity(`Happy Easter nya~! | ${prefix}help`, {type: 'PLAYING'}).catch(console.error);
    }else if(bel) {
        bot.user.setActivity(`It\'s my birthday nya~! | ${prefix}help`, {type: 'PLAYING'}).catch(console.error);
    }else if(miku) {
        bot.user.setActivity(`Happy birthday Miku-senpai! | ${prefix}help`, {type: 'PLAYING'}).catch(console.error);
    }else if(halloween) {
        bot.user.setActivity(`Have a spooky Halloween tee hee | ${prefix}help`, {type: 'PLAYING'}).catch(console.error);
    }else if(thanks) {
        bot.user.setActivity(`Happy Thanksgiving nya~! | ${prefix}help`, {type: 'PLAYING'}).catch(console.error);
    }else if(xmas) {
        bot.user.setActivity(`Merry Xmas nya! | ${prefix}help`, {type: 'PLAYING'}).catch(console.error);
    }else {
        bot.user.setActivity(`with my tail nya~ | ${prefix}help`, {type: 'PLAYING'}).catch(console.error);
    }
}