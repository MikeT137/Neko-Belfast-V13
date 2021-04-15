const {prefix} = require('../../config.json')
module.exports = {
    name:'marry',
    description: "It sends a marrying gif",
    usage: `${prefix}marry (ping)`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_marry = [
            'https://i.pinimg.com/originals/fe/63/7c/fe637c8ecf8ab9187399faaccceca34e.gif',
            'https://i.gifer.com/MNv8.gif',
            'https://uploads.disquscdn.com/images/a7e8a3f8c38932ef0c44dbd590bc104caf65ddff53ee5f6c23da4d4325e432fc.gif',
            'https://media1.tenor.com/images/76807e7b666fb954529509e107fff97d/tenor.gif?itemid=10799166',
            'https://i.pinimg.com/originals/4e/2b/93/4e2b93e3be7da12cb163ad2a37990160.gif',
            'https://media.tenor.com/images/ac932befed18b8fdf8f1ba1d484b6b4f/tenor.gif',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a184914-ec18-49de-b7c9-17fef65c6c83/d61xdq3-80e0012d-4b81-45f5-877c-88d1f48ee5cd.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOWExODQ5MTQtZWMxOC00OWRlLWI3YzktMTdmZWY2NWM2YzgzXC9kNjF4ZHEzLTgwZTAwMTJkLTRiODEtNDVmNS04NzdjLTg4ZDFmNDhlZTVjZC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Ctv-zdTu2pJwnNvWd1hqDBBvXtCR-B_yHZWWCGm3mwk',
            'https://media.giphy.com/media/l49JQCXq5WLMhnOFO/giphy.gif',
            'https://media1.tenor.com/images/edb26b87820a68fe8faf88e6c19e5387/tenor.gif?itemid=10799165',
            'https://pa1.narvii.com/6075/38b36eb01b56a4728793b9bf183c962d2084249f_hq.gif'
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send(`Uhm, i don\'t think you can do that ${message.author.username}, sorry.`)
            }else if(person.id === '727093236954431488') {
                message.delete();
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`Y-YES!! I\'LL MARRY YOU MASTER! I love you nyaa~`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_marry[Math.floor(Math.random() * random_marry.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else {
                message.delete();
                const embed2 = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} wants to marry ${person.username}, what would they say?`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_marry[Math.floor(Math.random() * random_marry.length)])
                    .setColor('#7d77df')
                message.channel.send(embed2);
            }
        }else {
            message.channel.send('You have to ping someone to ask them for marriage.')
        }
    }
}