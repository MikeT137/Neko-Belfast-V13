module.exports = {
    name: 'coinflip',
    description: 'The user flips a coin',
    run: async (bot, message, args) => {
        const coinface = [
            'Heads!',
            'OMG it landed on the edge! Amazing!',
            'Tails!'
        ]
        const answer = coinface[Math.floor(Math.random() * coinface.length)];

        if(!args[0]){
            message.channel.send(`${answer}:coin:`)
        }else return;
    }
}