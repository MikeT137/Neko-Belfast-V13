module.exports = {
    name: 'coinflip',
    description: 'The user flips a coin',
    run: async (bot, message, args) => {
        const coinface = ['Heads!', 'Tails!', 'OMG it landed on the edge! Amazing!']
        const answer = coinface[Math.floor(Math.random() * coinface.length)];

        if(!args[0]){
            message.channel.send(`${answer}`)
        }else return;
    }
}