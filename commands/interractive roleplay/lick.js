module.exports = {
    name:'lick',
    description: "Licks a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_lick = [
            'https://media1.tenor.com/images/5ca31fd724f6baca41e366db4258a1e6/tenor.gif?itemid=12141726',
            'https://media1.tenor.com/images/c4f68fbbec3c96193386e5fcc5429b89/tenor.gif?itemid=13451325',
            'https://i.imgur.com/ZbAcxet.gif',
            'https://thumbs.gfycat.com/BestBlueGalapagosalbatross-size_restricted.gif',
            'https://i.imgur.com/Clk8A6M.gif',
            'https://i.pinimg.com/originals/e6/1d/a7/e61da774938e4f209818edcbc0d4a671.gif',
            'https://media1.tenor.com/images/2c15d00633af18a31a1d45aeb6e7ae0d/tenor.gif?itemid=9152683',
            'https://thumbs.gfycat.com/PopularSociableAmericanredsquirrel-size_restricted.gif',
            'https://vignette.wikia.nocookie.net/date-a-live/images/9/9a/Kurumi_licks_shido%27s_wound.gif/revision/latest?cb=20160722115544',
            'https://68.media.tumblr.com/ff60ce6b4ae9fde3267537faf5b56578/tumblr_omijznkrLe1rmzw91o1_500.gif',
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send('Just like a kitty aren\'t you? I\'m proud of you nya~')
            }else {
                const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} gave ${person.username} a lick O///O`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(random_lick[Math.floor(Math.random() * random_lick.length)])
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to lick them')
        }
    }
}