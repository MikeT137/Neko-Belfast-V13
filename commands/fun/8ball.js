module.exports = {
    name: '8ball',
    description: 'Gives a random response to a question',
    run: async (bot, message, args) => {
        let question = message.content.slice(bot.prefix.length+7);
        
        if(!question){
            message.channel.send('You must ask a question to use that command');
        }else{
            let rr = [
                //No
                'No',
                'Absolutely not',
                'Don’t count on it',
                'My reply is no',
                'My sources say no',
                'Outlook not so good',
                'Very doubtful',
                'Definitely not',
                'You may not rely on it',
                'Signs point to no',

                //Yes
                'Absolutely',
                'It is certain',
                'It is decidedly so',
                'Most likely',
                'Outlook good',
                'Signs point to yes',
                'Without a doubt',
                'Yes',
                'Definitely',
                'You may rely on it',

                //Maybe or IDK
                'Better not tell you now',
                'Cannot predict now',
                'Im not sure',
                'I dont know',
            ]
            let response = rr[Math.floor(Math.random() * rr.length)]
            message.channel.send(response);
        }
    }
}