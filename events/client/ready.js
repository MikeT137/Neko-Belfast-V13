const {prefix} = require ('../../config.json')

module.exports = bot => {
    console.log('Neko Belfast is online!');
    
    setInterval(function(){
        bot.user.setActivity(`over myaster | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    }, 10000)
    
    /*Holidays
    January 1st - `Happy New Year nya~!`
    February 14th - `Will you be my Valentine nya~?`
    March 17th - `Happy St. Patrick's Day nya~!`
    April 8th - `Happy Easter nya~!`
    May 11th - `Happy Mother's Day nya~!
    June 18th - `Happy Father's Day nya~!`
    June 29th - `It's my birthday nya~!`
    September 16th - `Happy birthday Miku-senpai!`
    October 31st - `Have a spooky Halloween! Tee hee`
    November 25th - `Happy Thanksgiving nya~!`
    December 25th - `Merry Christmas nya!`
    Every other day - over myaster*/
}