module.exports = {
    name:'lewd',
    description: "The user thinks whatever happend is lewd",
    execute(message, argument){
        const author = message.author;
        const Discord = require('discord.js');
        const random_lewd = [
            'https://cdn.weeb.sh/images/H1KHpauDW.gif',
            'https://media1.tenor.com/images/c755e8857df8b564688477af9d17b2cd/tenor.gif?itemid=17423467',
            'https://thumbs.gfycat.com/HatefulMadBigmouthbass-size_restricted.gif',
            'https://i.pinimg.com/originals/68/a9/8b/68a98bdf5f93ae034f3900ea5d92962a.gif',
            'https://i.pinimg.com/originals/1f/e6/b3/1fe6b3e4d71f4d9a2082446791a58b36.gif',
            'https://i.kym-cdn.com/photos/images/original/001/047/160/0f2.gif',
            'https://image.myanimelist.net/ui/5zdzFcBcrbnYLs3CUyho0M6z-pc_ApFJHBYEbjCpywac70dCzvvcuSU6UM9cunfmnctin5K1PWWdd_ZwEp_ap0msEkA44Bopy5XmaMx3JPTshanjR4VyQAo8XX3BHPde',
            'https://i.imgur.com/qknrvCO.gif?noredirect',
            'https://i.pinimg.com/originals/57/ce/a6/57cea63fc69039d2e87dc79a770d113a.gif',
            'https://i.kym-cdn.com/photos/images/newsfeed/001/030/317/a0f.gif',
        ]
        if(!argument[1]) {
            const embed = new Discord.MessageEmbed()

            .setTitle(`${author.username} thinks this is lewd!`)
            .setImage(random_lewd[Math.floor(Math.random() * random_lewd.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}