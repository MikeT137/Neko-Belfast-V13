const {prefix} = require('../../config.json')
module.exports = {
    name: '8ball',
    description: 'It sends a random response to your question',
    usage: `${prefix}8ball (question)`,
    category: 'random',
    run: async (bot, message, args) => {

        if(!args[0]){
            message.channel.send('You must ask a question to use that command');
        }else{
            //Answers (yes or no)
            let rr = [
                'Absolutely',
                'No',
                'It is certain',
                'Absolutely not',
                'Better not tell you now',
                'It is decidedly so',
                'Don\’t count on it',
                'Most likely',
                'My reply is no',
                'Cannot predict now',
                'Outlook good',
                'My sources say no',
                'Signs point to yes',
                'I\'m not sure',
                'Without a doubt',
                'Very doubtful',
                'Yes',
                'Definitely not',
                'Definitely',
                'I dont know',
                'You may not rely on it',
                'You may rely on it',
                'Signs point to no',
            ]
            let response = rr[Math.floor(Math.random() * rr.length)]
            message.channel.send(response);
        }
    }
}