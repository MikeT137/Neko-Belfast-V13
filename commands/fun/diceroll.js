module.exports = {
    name: 'diceroll',
    description: 'The user rolls a dice',
    run: async (bot, message, args) => {
        const diceface = ['1', '2', '3', '4', '5', '6']
        const number = diceface[Math.floor(Math.random() * diceface.length)];

        if(!args[0]){
            message.channel.send(`${number}`)
        }else return;
    }
}