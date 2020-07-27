module.exports = {
    name:'rage',
    description: "The user gets angry",
    run: async (bot, message, args) => {
        const author = message.author;
        const Discord = require('discord.js');
        const random_rage = [
            'https://media.giphy.com/media/dTWMCXuvFHJhOMS4OJ/giphy.gif',
            'https://i.pinimg.com/originals/c8/a8/db/c8a8dbd0771f93d11467be7c553d6922.gif',
            'https://media1.tenor.com/images/2f198dc24f638fc9f16776c8ebd183fd/tenor.gif?itemid=14682313',
            'https://i.gifer.com/40mI.gif',
            'https://media1.tenor.com/images/37b3975bc6ca1617409306dd6167f068/tenor.gif?itemid=10119870',
            'https://i.gifer.com/2dTZ.gif',
            'https://i.kym-cdn.com/photos/images/original/000/937/736/920.gif',
            'https://cdn130.picsart.com/324178429668201.gif?to=min&r=640',
            'https://i.gifer.com/3vcM.gif',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b02873a-e108-4a4e-aff7-d9b819aaa25e/dczv1g4-b25c902f-28af-429f-b230-c876cc780582.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmIwMjg3M2EtZTEwOC00YTRlLWFmZjctZDliODE5YWFhMjVlXC9kY3p2MWc0LWIyNWM5MDJmLTI4YWYtNDI5Zi1iMjMwLWM4NzZjYzc4MDU4Mi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.F2rgAsoQmBpI5z3XJy68vhppaebs3-NBqhfReh3QObE',
        ]
        if (!args[0]){
            const embed = new Discord.MessageEmbed()

            .setTitle(`${author.username} is getting really angry`)
            .setImage(random_rage[Math.floor(Math.random() * random_rage.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}