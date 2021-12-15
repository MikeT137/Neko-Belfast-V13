const {prefix} = require('../../config.json')
module.exports = {
    name:'stare',
    description: "It sends a staring gif",
    usage: `${prefix}stare @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_stare = [
            'https://c.tenor.com/p56rasRUDuQAAAAd/anime-stare.gif',
            'https://c.tenor.com/W_o-X6KNuCYAAAAC/anime-stare.gif',
            'https://i.pinimg.com/originals/d1/0f/56/d10f561068060b7175ba14b9ebef409e.gif',
            'https://c.tenor.com/Odb_aw7X8zcAAAAC/anime-stare.gif',
            'https://c.tenor.com/XHzTACggsVgAAAAC/anime-stare.gif',
            'https://i.pinimg.com/originals/61/04/ef/6104efe6d51767e707cb7b6495a73525.gif',
            'https://i.gifer.com/NmUk.gif',
            'https://64.media.tumblr.com/3d9d86860a58c3642feeb0f8f86fcbab/tumblr_mz2hiocEPr1sljg1oo1_500.gifv',
            'https://c.tenor.com/hPJOuqwEBWsAAAAC/cold-stare-glare.gif',
            'https://c.tenor.com/brkgHWmsV34AAAAC/anime-stare.gif'
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send('I don\'t blame you for staring at yourself, you\'re so beautiful nya~')
            }else if(person.id === `${bot.user.id}`) {
                message.channel.send(`${message.author.username}! Where do you think you\'re looking at nya?`)
            }else {
                message.delete();
                const embed = new Discord.MessageEmbed()
            
                    .setAuthor(`${message.author.username} stares at ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_stare[Math.floor(Math.random() * random_stare.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to stare at them')
        }
    }
}