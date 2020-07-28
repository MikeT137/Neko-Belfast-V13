module.exports = {
    name:'purr',
    description: "The user purrs",
    run: async (bot, message, args) => {
        const author = message.author;
        const Discord = require('discord.js');
        const random_purr = [
            'https://media.tenor.com/images/f0f1882e5b582e8073fa3831e1ed18bc/tenor.gif',
            'https://media.tenor.com/images/da4d4142e1fa5f786eb2637be5a05fec/tenor.gif',
            'https://media.tenor.com/images/1d5336519c84088c48b1fdf4cc30327c/tenor.gif',
            'https://i.imgur.com/1zxAedT.gif',
            'https://thumbs.gfycat.com/AstonishingInnocentGrayreefshark-small.gif',
            'https://image.myanimelist.net/ui/1Qejjs8xIEoZvC_d6tjFlfgWnKTVmMY1zIE63ewr3oiuOL22j_kZVoSVREefv4E6xMP1QkfitdcgJnCXwBhONYzjUrenvjMMS2wP7MgK4j6PxFkIgKOWw5u5zFHGJrbPSR7MZ6w6Yg4rBqlamtb7j6JQVnqKPHxXyUvQo-exUrc',
            'https://thumbs.gfycat.com/InfamousVariableAmericanriverotter-small.gif',
            'https://media.tenor.com/images/a39d515df3c793388899d2b224f9d420/tenor.gif',
            'https://media1.tenor.com/images/37a585471f5e895489a03ae705430218/tenor.gif?itemid=12142150',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dda19b18-ff2b-4802-96fb-5d40ab5c7eb1/d8rhcbo-e5b4d80d-17ee-4f0c-adc6-fcd36b151faf.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGRhMTliMTgtZmYyYi00ODAyLTk2ZmItNWQ0MGFiNWM3ZWIxXC9kOHJoY2JvLWU1YjRkODBkLTE3ZWUtNGYwYy1hZGM2LWZjZDM2YjE1MWZhZi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ok16zMZTKo8i3h6VJP3M20YY_2E9xRS-YtqsZU0fj58',
        ]
        if (!args[0]){
            const embed = new Discord.MessageEmbed()

            .setTitle(`${author.username} purrs, nya`)
            .setImage(random_purr[Math.floor(Math.random() * random_purr.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}