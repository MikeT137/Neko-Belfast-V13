module.exports = {
    name:'sip',
    description: "The user is sipping from their tea",
    run: async (bot, message, args) => {
        const author = message.author;
        const Discord = require('discord.js');
        const random_sip = [
            'https://media.tenor.com/images/f1d92c2e1731253deb643de2a8d5b883/tenor.gif',
            'https://media.tenor.com/images/1bb71bc886fb539594d7607b21af30a1/tenor.gif',
            'https://media.tenor.com/images/9e9ea3021d61439ec9fd1f5a6ac775ba/tenor.gif',
            'https://media.giphy.com/media/3og0IGXP7YLFONzVaU/giphy.gif',
            'https://media1.tenor.com/images/101d96af2af8ddb439c6e6e06bc5a0b1/tenor.gif?itemid=16219639',
            'https://media1.tenor.com/images/111c13dc82102b35d305b937bea8ead1/tenor.gif?itemid=17148355',
            'https://thumbs.gfycat.com/CalmEagerCony-size_restricted.gif',
            'https://image.myanimelist.net/ui/sefOExMnsDEhRAOFE2OLRSDcxsaKkA2SJhVXXQlY8fqjf39zfVnPNWZ2GeazPtK8mf4TdTGGTlnEhXfsGCgVYg_-JVVB9SHRpjLLkmfSgYqFrUMvjX7GrEU7M85c8Z7P',
            'https://1.bp.blogspot.com/-SW-NaPiV5FI/Wgtf6b4sOtI/AAAAAAAA_dM/qESrhv7su_0wKyGRGw6Ja5HidstLM-MLQCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BOsake%2Bwa%2BFuufu%2Bni%2BNatte%2BKara%2B-%2BEpisode%2B7%2B-%2BChisato%2BSips%2BIrish%2BCoffee.gif',
            'https://media1.tenor.com/images/75b6ae82235f23d09319a76935c5b850/tenor.gif?itemid=14789884',
        ]
        if (!args[0]){
            const embed = new Discord.MessageEmbed()

            .setAuthor(`${author.username} is sipping from a cup of tea`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(random_sip[Math.floor(Math.random() * random_sip.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}