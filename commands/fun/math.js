const math = require('math.js');

module.exports = {
    name: 'math',
    description: "Solves a mathematic equation",
    run: async(bot, message, args) => {
        if(!args[0]){
            message.channel.send('You didnt add a calculation')
        }
        let resp;

        try{
            resp = math.eval(args.join(' '));
        }catch(e){
            message.channel.send('Sorry, please input a valid calculation')
        }

        message.channel.send(`${resp}`);
    }
}