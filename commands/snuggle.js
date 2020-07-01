module.exports = {
    name:'snuggle',
    description: "Snuggles a user",
    execute(message, argument){
        const random_snuggle = [
            'https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif',
            'https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif',
            'https://media.giphy.com/media/eMpDBxxTzKety/giphy.gif',
            'https://media.giphy.com/media/GMFUrC8E8aWoo/giphy.gif',
            'https://media.giphy.com/media/3bqtLDeiDtwhq/giphy.gif',
            'https://media.giphy.com/media/nUz7d1sUppGta/giphy.gif',
            'https://media.giphy.com/media/EGauSkKQZuXxS/giphy.gif',
            'https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif',
        ]
        if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} snuggles ${member}...so adorable`);
            message.channel.send(random_snuggle[Math.floor(Math.random() * random_snuggle.length)]);
        }
    }
}