module.exports = {
    name: 'suggest',
    description: "It sends the creator a suggestion",
    run: async (bot, message, args) => {
        const miku = 'Miku Yoruka#6107';

        if(!args[0]) {
            message.channel.send('You have to say something to suggest it to the creator')
        }else if(args[0]) {
            message.miku.send(`${args[0]}`)
        }else return;
    }
}