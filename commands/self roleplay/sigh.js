const {prefix} = require('../../config.json')
module.exports = {
    name: 'sigh',
    description: "It sends a sighing gif",
    usage: `${prefix}sigh`,
    category: 'self roleplay',
    run: async(bot, message, args) => {
        const Discord = require('discord.js');
        const random_sigh = [
            'https://c.tenor.com/WqdUzHZ4CfAAAAAM/anime-nichijou.gif',
            'https://c.tenor.com/0EgQgZWi8WoAAAAM/sigh-yamadakun-and-the-seven-witches.gif',
            'https://c.tenor.com/etvJEflutuYAAAAM/shiroi-suna-no-aquatope-the-aquatope-on-white-sand.gif',
            'https://c.tenor.com/Qc2kUr8hXC4AAAAM/sigh-new-game.gif',
            'https://c.tenor.com/eWoBMxka7_MAAAAM/anime-sigh.gif',
            'https://c.tenor.com/fIA77nSZOdEAAAAM/anime-girl.gif',
            'https://c.tenor.com/lyriz8ZknQQAAAAM/rascal-does-not-dream-of-bunny-girl-senpai-anime-girl.gif',
            'https://c.tenor.com/LuFqQfvs36QAAAAM/sigh-anime.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} sighs in relief`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_sigh[Math.floor(Math.random() * random_sigh.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}