module.exports = {
    name:'shoot',
    description: "Shoots at a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_shot = [
            'https://media.tenor.com/images/29145d2d2903a529aebfb343722ce841/tenor.gif',
            'https://media1.tenor.com/images/9151e40f867c131255c4ebfdb1500e17/tenor.gif?itemid=16421088',
            'https://i.pinimg.com/originals/a0/f0/c3/a0f0c3dacfa0962425f34e011d30e9be.gif',
            'https://i.pinimg.com/originals/63/c0/c6/63c0c6b632dfffd790b60a87007f1bfd.gif',
            'https://media.tenor.com/images/a34dd7537be45df945cfd91eba72576c/tenor.gif',
            'https://media1.tenor.com/images/cfb7817a23645120d4baba2dcb9205e0/tenor.gif?itemid=5710495',
            'https://media1.tenor.com/images/e9f33b7ded139a73590878cf3f9d59a4/tenor.gif?itemid=16999058',
            'https://64.media.tumblr.com/cd9501e1de17c178317a0008245025eb/ed4df66f25ca5c66-e8/s500x750/69155246fb1eb16e66499040a9da3d4ad82b3005.gifv',
            'https://i.pinimg.com/originals/4a/36/ee/4a36eecf1f377a916866df9a382eda2f.gif',
            'https://i.gifer.com/DRn.gif'
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send('NO')
            }else {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} just shot ${person.username}, so brutal`, message.author.displayAvatarURL({ dynamic: true }))
                    .setImage(random_shot[Math.floor(Math.random() * random_shot.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to shoot them')
        }
    }
}