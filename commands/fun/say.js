module.exports = {
    name: 'say',
    description: 'The bot says what you want',
    run: async (bot, message, args) => {
        const say_msg = args.join(" ");
        if(!args[0]){
            message.channel.send('You have to give me something to say')
        }else if(args[0]) {
            if(message.author.hasPermission("MANAGE_MESSAGES")) {
                message.channel.send(`${say_msg}`);
                message.delete();
            }else {
                message.channel.send('You dont have permission to use that command (permission needed: manage messages)')
            }
        }
    }
}