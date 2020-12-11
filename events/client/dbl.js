module.exports = bot => {
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