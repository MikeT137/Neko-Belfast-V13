module.exports = {
    name:'hug',
    description: "Hugs a user",
    execute(message, argument){
        const random_hug = [
            'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif',
            'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif',
            'https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif',
            'https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif',
            'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
            'https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif',
            'https://media.giphy.com/media/DjczAlIcyK1Co/giphy.gif',
            'https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif',
        ]
        if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} hugs ${member} !`);
            file: random_hug[Math.floor(Math.random() * random_hug.length)]
        }
    }
}