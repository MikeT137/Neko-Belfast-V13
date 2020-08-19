module.exports = {
    name: 'say',
    description: 'The bot says what you want',
    run: async (bot, message, args) => {
        if(!args[0]){
            message.channel.send('You have to give me something to say')
        }else {
            if(message.deletable) {
                message.channel.send(args.slice(1).join(""));
                message.delete();
            }else {
                message.channel.send('I couldnt delete that message')
            }
        }
    }
}