module.exports = {
    name:'bored',
    description: "The user is bored",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_bored = [
            'https://i.pinimg.com/originals/40/ca/73/40ca73fab872f7a10f66f3dcafd09585.gif',
            'https://media1.tenor.com/images/4b84b1b5b40033e0a3a0bb2e22b7230d/tenor.gif?itemid=16728079',
            'https://i.pinimg.com/originals/c3/a1/9c/c3a19cf3e79aab4ac4ea674e9764a5ab.gif',
            'https://i.gifer.com/JHyT.gif',
            'https://pa1.narvii.com/6061/fdc1d2f595cdcaa769177ec4151e9778847036c0_hq.gif',
            'https://media1.tenor.com/images/0f0805c286205da154cce414aa110b98/tenor.gif?itemid=8118376',
            'https://i.pinimg.com/originals/cd/2c/c6/cd2cc65ff07f62533821f952e3542bd8.gif',
            'https://i.gifer.com/JPTs.gif',
            'https://i.imgur.com/EzAWv47.gif',
            'https://2.bp.blogspot.com/-RsPepQekbus/UsKt6g1gMDI/AAAAAAAACEY/78y2DEakcDo/s640/Bored+004.gif'
        ]
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is bored`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_bored[Math.floor(Math.random() * random_bored.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
        message.delete();
    }
}