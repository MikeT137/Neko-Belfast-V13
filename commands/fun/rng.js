module.exports = {
    name: 'rng',
    description: 'It gives a random number',
    run: async (bot, message, args) => {
        if(!args[0]){
            message.channel.send('You have to specify a number/limit of the random number')
        }else if(args[0]) {
            message.channel.send(`Your random number is: ${Math.floor(Math.random() * Math.floor(args[0]))}`)
        }else return;
    }
}