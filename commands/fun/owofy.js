const {prefix} = require('../../config.json')
module.exports = {
    name:'owofy',
    description: "It sends your exact message, but in the form of \"owo\"",
    usage: `${prefix}owofy (message)`,
    category: 'fun',
    run: async (bot, message, args) => {
        if(!args[0]) {
            message.channel.send('You need to type something to owofy it')
        }else {
            const nekoclient = require('nekos.life');
            const neko = new nekoclient();

            async function owofy() {
                const owoTEXT = await neko.sfw.OwOify({text: message.content.split(' ').slice(1).join(' ')});
                message.channel.send(owoTEXT.owo);
            }
            owofy();
        }
    }
}