module.exports = {
    name:'boop',
    description: "Boops a user's nose",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const randomPuppy = require('random-puppy');
        const person = message.mentions.users.first();
        const boop = 'https://tenor.com/search/anime-boop-gifs';
        const random = boop[Math.floor(Math.random() * boop.length)];
        const img = await randomPuppy(random);
        /*const random_boop = [
            'https://media1.tenor.com/images/cbf38a2e97a348a621207c967a77628a/tenor.gif?itemid=6287077',
            'https://media.tenor.com/images/9945480efe5179c227558769613ee275/tenor.gif',
            'https://i.gifer.com/AfDr.gif',
            'https://i.imgur.com/fZmUTgw.gif',
            'https://media.tenor.com/images/75c40413d2a4ec935b707ef32ab53321/tenor.gif',
            'https://66.media.tumblr.com/9a457a43bcae3ebaafda53d7fe6f572d/tumblr_pqjm6cCRt41th206io1_1280.gif',
            'https://thumbs.gfycat.com/PowerlessEqualDeviltasmanian-size_restricted.gif',
            'https://i.gifer.com/81H8.gif',
            'https://steamuserimages-a.akamaihd.net/ugc/169289604394170554/4CAB1E72D3FCD5527A1A6BB4443AF5E9EC65627F/',
            'https://media.tenor.com/images/d07762ab2f5fc5d1d43525d2b3db7de8/tenor.gif',
        ]*/
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send('Eh? Why did you boop yourself?')
            }else {
                const embed = new Discord.MessageEmbed()
        
                .setAuthor(`${message.author.username} booped ${person.username}'s nose !`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(img)
                .setURL(random)
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to boop them')
        }
    }
}