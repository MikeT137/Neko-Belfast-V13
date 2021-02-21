module.exports = {
    name: 'hide',
    description: 'The user hides',
    run: async(bot, message, args) => {
        const Discord = require('discord.js');
        const random_hide = [
            'https://media1.tenor.com/images/af7f50de621aacf1c350baf584f9016d/tenor.gif?itemid=13765054',
            'https://i.pinimg.com/originals/f8/eb/a7/f8eba73981eea6dd48e3630d867e6a59.gif',
            'https://media1.tenor.com/images/87243e2e9268ecb5134af016a4f78f2e/tenor.gif?itemid=16038395',
            'https://i.pinimg.com/originals/3e/6f/ab/3e6fabc6654d7d35cc417f2b8120cbbf.gif',
            'https://media1.tenor.com/images/eaee2b0072aa2a159c882b0f86162d03/tenor.gif?itemid=13066865',
            'https://i.pinimg.com/originals/bd/69/36/bd69362c627737bef489401a74aeb835.gif',
            'https://i.gifer.com/BUPE.gif',
            'https://media1.tenor.com/images/2b7dbc632d8123acaabb462217760929/tenor.gif?itemid=13839451',
            'https://image.myanimelist.net/ui/b5zBorQN4Jt_uGnuhEujHv6VeYrgCLvoy65DWDjQYBiYDb34YpyAN2DHig9fmF_oh7D5ODHAT1MM57gG8hZyKbretKnaN4IvtMcA95sU8nZUHSN0bD2_mGucWva5kqMyrX5tSIdFnsxJdutM7tVe7A',
            'https://data.whicdn.com/images/107809583/original.gif'
        ]
        if(!args[0]) {
            const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} is hiding`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(random_hide[Math.floor(Math.random() * random_hide.length)])
                .setColor('#7d77df')
            message.channel.send(embed);
        }
    }
}