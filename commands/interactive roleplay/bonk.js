module.exports = {
    name:'bonk',
    description: "It sends a bonking gif",
    usage: 'b.bonk (ping)',
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_bonk = [
            'https://i.pinimg.com/originals/99/ea/48/99ea48ec7a3d63e77186302e8d85426e.gif',
            'https://media1.tenor.com/images/1ad93c4d7abc2698297e875bbfe27e53/tenor.gif?itemid=17422988',
            'https://i.gifer.com/FoFy.gif',
            'https://i.imgur.com/0IxjsfM.gif',
            'https://media.tenor.com/images/47698b115e4185036e95111f81baab45/tenor.gif',
            'https://i.imgur.com/zXuP1Pq.gif?1',
            'https://i.imgur.com/MAVGS.gif',
            'https://i.imgur.com/3RgoNYy.gif',
            'https://preview.redd.it/lgdu9hsvmh951.gif?s=68c42283a59d0afc1a9602cbcb36000c2cde03a6',
            'https://i.imgur.com/DIAbFlT.gif'
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send(`Don\'t do that nya!! Don\'t hurt yourself please..`)
            }else {
                message.delete();
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} is bonking ${person.username}, auch`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_bonk[Math.floor(Math.random() * random_bonk.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to bonk them')
        }
    }
}