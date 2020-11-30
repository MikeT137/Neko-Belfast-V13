module.exports = {
    name:'stare',
    description: "Stares at a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_stare = [
            'https://media1.tenor.com/images/3e53c38c053b68475a899ef7c6398a85/tenor.gif?itemid=14080506',
            'https://thumbs.gfycat.com/EnchantingHandyCusimanse-size_restricted.gif',
            'https://media1.tenor.com/images/1b42b934b2cb4a4d68004056762514d0/tenor.gif?itemid=12387055',
            'https://media1.tenor.com/images/afd4282d996325f5da7be3c2c963df41/tenor.gif?itemid=4686978',
            'https://i.pinimg.com/originals/d1/0f/56/d10f561068060b7175ba14b9ebef409e.gif',
            'https://i.gifer.com/MOhk.gif',
            'https://media.giphy.com/media/jrXFhTkoiesKY/giphy.gif',
            'https://66.media.tumblr.com/3d9d86860a58c3642feeb0f8f86fcbab/tumblr_mz2hiocEPr1sljg1oo1_500.gifv',
            'https://i.gifer.com/9jXw.gif',
            'https://media1.tenor.com/images/e5ccc1cb4489b244e02c7999669328ae/tenor.gif?itemid=12242945',
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send('I don\`t blame you for staring at yourself, you\`re pretty beautiful nya~')
            }else {
                const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} stares at ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(random_stare[Math.floor(Math.random() * random_stare.length)])
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to stare at them')
        }
    }
}