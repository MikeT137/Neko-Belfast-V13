module.exports = {
    name:'love',
    description: "The bot give you a lovely message",
    execute(message, argument){
        if(!argument[1]){
            message.channel.send('I love you master!:heart:');
        }
    }
}