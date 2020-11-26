module.exports = {
    name: 'suggest',
    description: "It sends the creator a suggestion",
    run: async (bot, message, args) => {

        if(!args[0]) {
            message.channel.send('You have to say something to suggest it to the creator')
        }else if(args[0]) {
            bot.users.fetch('486276124549316619').then((user) =>{
                user.send(`${message.author.username} said: ${args}`);
                message.channel.send('Your suggestion has been send to the creator, thank you for your time<3')
              });
        }else return;
    }
}