module.exports = {
    name:'allreactions',
    description: "The author checks for new reactions on the otakugifs.xyz site",
    run: async (bot, message, args) => {
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/allreactions';

        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'pj7g9seujJByserio0awmvx66W8fFtrboW9kVVNeu13yHbBgE3IsgNBS3rUuD8321l2CH3tST900dhEyd0qH9P2'
            }
        }).then((res) =>
            res.json()
        ).then((json) => {
            if (!args[0]) {
                const embed = new Discord.MessageEmbed()
        
                    .setAuthor('Reactions:')
                    .setImage(json.url)
                    .setColor('#7d77df')
                message.channel.send(embed)
            }
        })
    }
}