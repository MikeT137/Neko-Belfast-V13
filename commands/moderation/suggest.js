module.exports = {
    name: 'suggest',
    description: "It sends the creator a suggestion",
    run: async (bot, message, args) => {
        if(!args[0]) {
            message.channel.send('You have to say something to suggest it to the creator')
        }else if(args[0]) {
            message.member.user.send(`${args[1]}`)
        }else return;
    }
}