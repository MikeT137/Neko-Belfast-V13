const {prefix} = require('../../config.json')
module.exports = bot => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity(`with my tail nya~ | ${prefix}help`, {type: 'PLAYING'}).catch(console.error);
}