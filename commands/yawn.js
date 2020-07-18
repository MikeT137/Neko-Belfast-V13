module.exports = {
    name:'yawn',
    description: "The user yawns",
    run: async (bot, message, argument){
        const author = message.author;
        const Discord = require('discord.js');
        const random_yawn = [
            'https://i.pinimg.com/originals/9c/ef/52/9cef52ce27ab97e0fa9cfac1cdc1007f.gif',
            'https://media.tenor.com/images/82f45a1fd5222b86a0f04b2f0ead7ac9/tenor.gif',
            'https://media.tenor.com/images/bae0f9d28c36037794ec30dcaed11bb7/tenor.gif',
            'https://media1.tenor.com/images/9e931007781592f3041f830c390338aa/tenor.gif?itemid=14356648',
            'https://data.whicdn.com/images/307775321/original.gif',
            'https://media1.tenor.com/images/0981aae731d5bd80bdcb40b7982e391e/tenor.gif?itemid=5604306',
            'https://thumbs.gfycat.com/AlarmingBelovedKitfox-size_restricted.gif',
            'https://giffiles.alphacoders.com/208/208882.gif',
            'https://i.kym-cdn.com/photos/images/original/001/090/072/e49.gif',
            'https://media.tenor.com/images/a7aa26fbe19c260374cdc1f21bc1339a/tenor.gif',
        ]
        if(!argument[1]) {
            const embed = new Discord.MessageEmbed()

            .setTitle(`${author.username} feels sleepy`)
            .setImage(random_yawn[Math.floor(Math.random() * random_yawn.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}