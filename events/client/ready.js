const {prefix} = require ('../../config.json')

module.exports = bot => {
    console.log('Neko Belfast is online!');
    setInterval(function(){
        bot.user.setActivity(`${bot.guilds.cache.size} servers | use b.help for commands`, {type: 'WATCHING'}).catch(console.error);
    }, 10000)

    //Discord Bot List - Server Count
    const DBL = require("dblapi.js");
    const topgglink = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyNzA5MzIzNjk1NDQzMTQ4OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjAxMDIxNzQ2fQ.QCfXPZhovBGFszhJAtrdBTChuh92-xrtGRoGiCJnYnU';
    const dbl = new DBL(`${topgglink}`, bot);

    dbl.on('posted', () => {
    console.log('Server count posted!');
    })

    dbl.on('error', e => {
    console.log(`Oops! ${e}`);
    });
}