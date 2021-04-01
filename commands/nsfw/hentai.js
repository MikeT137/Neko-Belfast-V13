module.exports = {
    name:'hentai',
    description: "hentai image",
    run: async (bot, message, args) => {
    	const neko = require('nekos.life');
    	const {nsfw} = new neko();
 	    const embed = new Discord.MessageEmbed()

            .setAuthor(`- Hentai`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(nsfw.randomHentaiGif())
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}
