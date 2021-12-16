const {prefix} = require('../../config.json')
module.exports = {
    name:'think',
    description: "It sends a thinking gif",
    usage: `${prefix}think`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_think = [
            'https://media1.tenor.com/images/a790e458eb86a4f191536ef9c174d122/tenor.gif?itemid=12396059',
            'https://media.tenor.com/images/2ab5635c3ca5d3c2891666347e44e587/tenor.gif',
            'https://media.tenor.com/images/83ab21f684ec5b2325e8f86f6b7d1a85/tenor.gif',
            'https://media.tenor.com/images/91e477c5e6500c589adecb589009c41c/tenor.gif',
            'https://media.tenor.com/images/b6881882d9956eaf2308c0831c1f5936/tenor.gif',
            'https://media.tenor.com/images/da083b91111dbe973e090c67e0cf8d72/tenor.gif',
            'https://media1.tenor.com/images/5a0f9dfd66ac4fcfcfcdf33497c828e5/tenor.gif?itemid=13666459',
            'https://1.bp.blogspot.com/-Cz18jeQ60ho/YEa0zE-dsLI/AAAAAAACHM8/55t-pCOVI4AFihzFaqJGVrexJm5L9ldWACPcBGAsYHg/s1920/Azur%2BLane%2B-%2BBisoku%2BZenshin%2521%2B-%2BEpisode%2B9%2B-%2BBel-chan%2BThinks%2Bof%2BBelfast.gif',
            'https://media1.tenor.com/images/c86474bac2991a3e8029787955cced23/tenor.gif?itemid=6013432',
            'https://data.whicdn.com/images/149221907/original.gif',
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is thinking, hmm`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_think[Math.floor(Math.random() * random_think.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}