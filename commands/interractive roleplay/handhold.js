module.exports = {
    name:'handhold',
    description: "Hold a user's hand",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_hh = [
            'https://media.giphy.com/media/yX0CDRs2B2y88/giphy.gif',
            'https://media.giphy.com/media/w7RGPBLGO8rjq/giphy.gif',
            'https://carnivorouslreviews.files.wordpress.com/2018/08/interlocking.gif',
            'https://66.media.tumblr.com/7a1d87c8e7056ac5ce2a202d53a36905/tumblr_myqbqfZWSb1sp0cggo1_500.gif',
            'https://media.tenor.com/images/6ac3e0ade34f080bb295e4caf2207756/tenor.gif',
            'https://i.pinimg.com/originals/cf/27/a2/cf27a233bea49a54f805bd4f5e0e44b5.gif',
            'https://media1.tenor.com/images/07a7924fe3c511df7bf445e954ec4ec1/tenor.gif?itemid=12607434',
            'https://giffiles.alphacoders.com/906/90663.gif',
            'https://64.media.tumblr.com/fab4919414ceaceeea4d3e3336a99915/tumblr_onnkquUkxy1viiyyio1_500.gif',
            'https://data.whicdn.com/images/248505351/original.gif',
        ]
        if(message.mentions.members.size >= 1) {
            const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} holds ${person.username}s hand...O///O`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(random_hh[Math.floor(Math.random() * random_hh.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}