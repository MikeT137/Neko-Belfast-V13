const prefix = require('../../config.json')
module.exports = bot =>{
    console.log('Belfast is online!');
    bot.user.setActivity('Use b!help for commands', {type: 'PLAYING'}).catch(console.error);
}