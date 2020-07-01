module.exports = {
    name:'kiss',
    description: "Kisses a user",
    execute(message, argument){
        const random_kiss = [
            'https://media.giphy.com/media/MQVpBqASxSlFu/giphy.gif',
            'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
            'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
            'https://media.giphy.com/media/11rWoZNpAKw8w/giphy.gif',
            'https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif',
            'https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif',
        ]
        if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} kisses ${member} :flushed:`);
            message.channel.send(random_kiss[Math.floor(Math.random() * random_kiss.length)]);
        }
    }
}