module.exports = {
    name:'lick',
    description: "Licks a user",
    execute(message, argument){
        const Discord = require('discord.js');
        const author = message.author;
        const person = message.mentions.users.first();
        const random_lick = [
            'https://media1.tenor.com/images/5ca31fd724f6baca41e366db4258a1e6/tenor.gif?itemid=12141726',
            'https://media1.tenor.com/images/c4f68fbbec3c96193386e5fcc5429b89/tenor.gif?itemid=13451325',
            'https://i.imgur.com/ZbAcxet.gif',
            'https://thumbs.gfycat.com/BestBlueGalapagosalbatross-size_restricted.gif',
            'https://i.imgur.com/Clk8A6M.gif',
            'https://i.pinimg.com/originals/e6/1d/a7/e61da774938e4f209818edcbc0d4a671.gif',
            'https://steamuserimages-a.akamaihd.net/ugc/932676970225506188/DD67E197E5131C57261829E69CF516DE1B99A08E/',
            'https://thumbs.gfycat.com/PopularSociableAmericanredsquirrel-size_restricted.gif',
            'https://vignette.wikia.nocookie.net/date-a-live/images/9/9a/Kurumi_licks_shido%27s_wound.gif/revision/latest?cb=20160722115544',
            'https://68.media.tumblr.com/ff60ce6b4ae9fde3267537faf5b56578/tumblr_omijznkrLe1rmzw91o1_500.gif',
        ]
        if(message.mentions.members.size >= 1) {
            const embed = new Discord.MessageEmbed()

            .setTitle(`${author.username} gave ${person.username} a lick :flushed:`)
            .setImage(random_lick[Math.floor(Math.random() * random_lick.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}