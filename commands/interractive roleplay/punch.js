module.exports = {
    name:'punch',
    description: "Punchess a user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_punch = [
            'https://media1.tenor.com/images/31686440e805309d34e94219e4bedac1/tenor.gif?itemid=4790446',
            'https://media.giphy.com/media/AlsIdbTgxX0LC/giphy.gif',
            'https://media1.tenor.com/images/6834932465e2659dc5b1ee38dfd42b44/tenor.gif?itemid=14615839',
            'https://i.pinimg.com/originals/d7/c3/0e/d7c30e46a937aaade4d7bc20eb09339b.gif',
            'https://media.tenor.com/images/483ede2afbcf3afca6465d0de112c0d5/tenor.gif',
            'https://i.pinimg.com/originals/92/f4/59/92f4595d3f6ac39b6c175eb3d454fec2.gif',
            'https://media1.tenor.com/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif?itemid=5012110',
            'https://i.chzbgr.com/full/8583163648/h2396FC8A/screw-you-power-star',
            'https://i.pinimg.com/originals/bc/96/17/bc9617a2460e4640fcd9cf474bea2c10.gif',
            'https://66.media.tumblr.com/992e4cac19f6a0ef68ea89ab5c3a59a0/tumblr_nrnfw7UZyR1uo5k7bo1_500.gif',
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
            message.delete();
            if(person.id == message.author.id) {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`Don\'t do that nya!! Don\'t hurt yourself please..`)
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_cry[Math.floor(Math.random() * random_cry.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else {
                const embed = new Discord.MessageEmbed()

                    .setAuthor(`${message.author.username} gave ${person.username} a punch...awee`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_punch[Math.floor(Math.random() * random_punch.length)])
                    .setColor('#7d77df')
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to punch them')
        }
    }
}