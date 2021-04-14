const {prefix} = require('../../config.json')
module.exports = {
    name:'shoot',
    description: "It sends a shooting gif",
    usage: `${prefix}shoot (ping)`,
    category: 'interactive roleplay',
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
        const random_cry = [
            'https://media1.tenor.com/images/b88fa314f0f172832a5f41fce111f359/tenor.gif?itemid=13356071',
            'https://media1.tenor.com/images/09b085a6b0b33a9a9c8529a3d2ee1914/tenor.gif?itemid=5648908',
            'https://media.tenor.com/images/19089cd2b4970740debff2cdfc43329a/tenor.gif',
            'https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif',
            'https://media.giphy.com/media/Xqlsn2kLPBquI/giphy.gif',
            'https://media.tenor.com/images/bf139869d81cd9b73144d6b941ebb733/tenor.gif',
            'https://i.pinimg.com/originals/9d/cb/2b/9dcb2b83c29e6c70b4971e718cabe958.gif',
            'https://66.media.tumblr.com/c65a4af4ff032d1ca06350b66a1e819c/tumblr_mtxk6zVzaa1sogk1do1_r1_500.gif',
            'https://66.media.tumblr.com/5b4e0848d8080db04dbfedf31a4869e2/tumblr_inline_or4whcrg1z1ueut6r_540.gif',
            'https://thumbs.gfycat.com/HalfAssuredBorderterrier-size_restricted.gif',
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send('NO')
            }else if(person.id === '727093236954431488') {
                message.delete();
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`NYAA! Why do you want to abuse me like this ${message.author.username}?`)
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_cry[Math.floor(Math.random() * random_cry.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else {
                message.delete();
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
    }
}