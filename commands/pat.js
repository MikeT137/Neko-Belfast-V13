module.exports = {
    name:'pat',
    description: "Pats a user",
    execute(message, argument){
        const random_pat = [
            'https://media.giphy.com/media/osYdfUptPqV0s/giphy.gif',
            'https://media.giphy.com/media/L2z7dnOduqEow/giphy.gif',
            'https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif',
            'https://media.giphy.com/media/109ltuoSQT212w/giphy.gif',
            'https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif',
        ]
        if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} pats ${member}...so cute`);
            message.channel.send(random_pat[Math.floor(Math.random() * random_pat.length)]);
        }
    }
}