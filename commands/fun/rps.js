module.exports = {
    name: 'rps',
    description: 'the user can play rock paper scissors',
    run: async(bot, message, async) => {
        message.channel.send('Ready to play some rock(r) paper(p) scissors(s)? 3, 2, 1, GO!');
        setTimeout(function(){message.channel.send('You didnt respond in time');}, 3000);
    }
}