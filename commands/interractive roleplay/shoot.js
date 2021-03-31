module.exports = {
    name:'shoot',
    description: "Shoots at a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_shot = [
            'https://media.tenor.com/images/29145d2d2903a529aebfb343722ce841/tenor.gif',
            'https://media1.tenor.com/images/9151e40f867c131255c4ebfdb1500e17/tenor.gif?itemid=16421088',
            'https://media1.tenor.com/images/0c7d6aac3d955b166c4bd1fba2e0e21d/tenor.gif?itemid=13871978',
            'https://i.pinimg.com/originals/63/c0/c6/63c0c6b632dfffd790b60a87007f1bfd.gif',
            'https://media.tenor.com/images/a34dd7537be45df945cfd91eba72576c/tenor.gif',
            'https://media1.tenor.com/images/cfb7817a23645120d4baba2dcb9205e0/tenor.gif?itemid=5710495',
            'https://tenor.com/view/survival-game-club-anime-gatling-gun-mini-gif-11472070',
            'https://tenor.com/view/jormungand-shoot-firearms-manga-anime-gif-5597802',
            'https://tenor.com/view/black-lagoon-revy-shooting-revy-shooting-black-lagoon-revy-gif-15579105',
            'https://i.gifer.com/DRn.gif'
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send('NO')
            }else {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} just shot ${person.username}, so brutal`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_shot[Math.floor(Math.random() * random_shot.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to shoot them')
        }
        message.delete();
    }
}