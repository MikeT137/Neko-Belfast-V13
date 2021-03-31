module.exports = {
    name:'think',
    description: "The user is thinking",
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
            'https://cdn35.picsart.com/141906934001202.gif?to=min&r=640',
            'https://media1.tenor.com/images/c86474bac2991a3e8029787955cced23/tenor.gif?itemid=6013432',
            'https://data.whicdn.com/images/149221907/original.gif',
        ]
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is thinking, hmm`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_think[Math.floor(Math.random() * random_think.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}