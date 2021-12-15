const {prefix} = require('../../config.json')
module.exports = {
    name:'poke',
    description: "It sends a poking gif",
    usage: `${prefix}poke @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_poke = [
            'https://c.tenor.com/fxIMcE41WpgAAAAd/anime-boop.gif',
            'https://c.tenor.com/RmQElPHERIoAAAAC/boop-anime.gif',
            'https://c.tenor.com/4OHxyGd4qp0AAAAC/boop-nose.gif',
            'https://c.tenor.com/y4R6rexNEJIAAAAC/boop-anime.gif',
            'https://c.tenor.com/HZWeNnmcbBYAAAAC/cat-boop.gif',
            'https://c.tenor.com/7iV_gBGrRAUAAAAC/boop-poke.gif',
            'https://c.tenor.com/NjIdfk7i3bsAAAAC/poke-poke-poke.gif',
            'https://66.media.tumblr.com/9a457a43bcae3ebaafda53d7fe6f572d/tumblr_pqjm6cCRt41th206io1_1280.gif',
            'https://i.pinimg.com/originals/fd/e7/58/fde75886df37020bc37d7ba44c1e29ee.gif',
            'https://c.tenor.com/APqauOtznp4AAAAC/boop-poke.gif'
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send('If you\'re wondering, yes you are awake, this isn\'t a dream')
            }else if(person.id === `${bot.user.id}`) {
                message.delete();
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`Nyaa, you get poked too, poooke!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_poke[Math.floor(Math.random() * random_poke.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else {
                message.delete();
                const embed2 = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} is poking ${person.username}!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_boop[Math.floor(Math.random() * random_boop.length)])
                    .setColor('#7d77df')
                message.channel.send(embed2);
            }
        }else {
            message.channel.send('You have to ping someone to poke them')
        }
    }
}