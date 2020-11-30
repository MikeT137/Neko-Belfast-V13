module.exports = {
    name:'nom',
    description: "Noms a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_nom = [
            'https://media.tenor.com/images/804c750d7443635b012b46a65a1e723b/tenor.gif',
            'https://media.tenor.com/images/405588a5f0df4aeb196187ce0a0751e4/tenor.gif',
            'https://i.pinimg.com/originals/59/6e/72/596e723a419d19ed784dfb546723018e.gif',
            'https://66.media.tumblr.com/35a1a39e5832dee49e04f4958b4e9381/tumblr_omss2uGQI21v9ypo0o1_400.gifv',
            'https://media1.tenor.com/images/7ed7efa06e9c8cd89905a5c9ad5f40a0/tenor.gif?itemid=5729863',
            'https://i.imgur.com/Ns1RBzX.gif',
            'https://i.imgur.com/Ryy3D7r.gif',
            'https://i.chzbgr.com/full/8324406016/hD54E2ACA/om-nom',
            'https://i.kym-cdn.com/photos/images/original/001/443/180/d25.gif',
            'https://i.gifer.com/EQn9.gif',
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send('NYAA! Dont do that!')
            }else {
                const embed = new Discord.MessageEmbed()
        
                .setAuthor(`${message.author.username} noms ${person.username}!`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(random_nom[Math.floor(Math.random() * random_nom.length)])
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to nom them')
        }
    }
}