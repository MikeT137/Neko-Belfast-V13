const {prefix} = require('../../config.json')
module.exports = {
    name:'smile',
    description: "It sends a smiling gif",
    usage: `${prefix}smile`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_smile = [
            'https://c.tenor.com/3fAZZncIHDQAAAAM/smile-anime.gif',
            'https://c.tenor.com/VrUxJZFdmIsAAAAM/anime-excited.gif',
            'https://c.tenor.com/P80RbbzxQU0AAAAM/izuku-midoriya-smile.gif',
            'https://c.tenor.com/BA2eLg42RbEAAAAM/isitwrongtotryandpickupgirlsinadungeon-bellcranel.gif',
            'https://c.tenor.com/nuKmYDgaDpAAAAAM/anime-smile.gif',
            'https://tenor.com/view/yoruka-smile-yoruka-smile-anime-anime-girl-gif-20389447',
            'https://2.bp.blogspot.com/-xPuSDvwxSuU/XalWr1yXfQI/AAAAAAABqdc/8Clgt035JKUj8P4dcAKLpUtEcOzsfZKmgCKgBGAsYHg/s1600/Azur%2BLane%2B-%2BEpisode%2B3%2B-%2BBelfast%2BIntroduction.gif',
            'https://c.tenor.com/U1p83COiAPYAAAAM/anime-happy-anime-smile.gif',
            'https://c.tenor.com/ivEOWR55wBEAAAAM/anime-happy.gif',
            'https://c.tenor.com/5pFqYK5spNkAAAAM/anime-girl.gif',
            'https://1.bp.blogspot.com/-zF0Tu9Kh5HA/XbKW_CanIpI/AAAAAAABrHo/prB9RBDhPj8majmiIXJ5wHXgavKCQm-pQCKgBGAsYHg/s1600/Azur%2BLane%2B-%2BEpisode%2B4%2B-%2BBelfast%2BHas%2Ba%2BWish.gif',
            'https://c.tenor.com/I1xDE0C3YA0AAAAM/azur-lane-anime.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is smiling, how beautiful`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_smile[Math.floor(Math.random() * random_smile.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}