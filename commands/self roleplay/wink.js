const {prefix} = require('../../config.json')
module.exports = {
    name:'wink',
    description: "It sends a winking gif",
    usage: `${prefix}wink`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_wink = [
            'https://c.tenor.com/SENM5TMtwIMAAAAM/anime-banished-from-the-heros-party.gif',
            'https://c.tenor.com/-5AUG9ixQZgAAAAM/anime-girl.gif',
            'https://c.tenor.com/1XNTOsFJQY8AAAAM/wink-blushing.gif',
            'https://c.tenor.com/0H8pVlaAy-MAAAAM/chika-fujiwara-kaguya-sama-love-is-war.gif',
            'https://c.tenor.com/TiEN8ncuLG4AAAAM/iroha-ore-gairu.gif',
            'https://c.tenor.com/RsD6SF6zdj4AAAAM/yay-wink.gif',
            'https://c.tenor.com/wmf0u2u2aPYAAAAM/smile-anime.gif',
            'https://c.tenor.com/xfLp51yE5SgAAAAM/ferriss-felix-re-zero.gif',
            'https://c.tenor.com/QsCmMJ2JtMMAAAAM/wink-misaki-shokuhou.gif',
            'https://c.tenor.com/hzntQXBDMokAAAAM/anime-wink.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} winks`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_wink[Math.floor(Math.random() * random_wink.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}