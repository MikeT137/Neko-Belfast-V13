module.exports = {
    name: 'say',
    description: 'The bot says what you want',
    run: async (bot, message, args) => {
        const say_msg = args.length >= -1;
        if(!say_msg){
            message.channel.send('You have to give me something to say')
        }else{
            if(message.deletable) {
                message.channel.send(`${say_msg}`);
                message.delete();
            }else {
                message.channel.send('I couldnt say that because i cant delete messages')
            }
        }
    }
}