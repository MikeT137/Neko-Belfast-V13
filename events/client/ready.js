const {prefix} = require('../../config.json')
module.exports = bot => {
    console.log('Neko Belfast is online!');
    bot.user.setActivity(`It\'s my birthday nya~! | ${prefix}help`, {type: 'PLAYING'}).catch(console.error);

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
}