module.exports = {
    name:'neko',
    description: "neko hentai image",
    run: async (bot, message, args) => {
    	const neko = require('nekos.life');
    	const {nsfw} = new neko();
 	    const embed = new Discord.MessageEmbed()

            .setAuthor(`- Neko`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(nsfw.nekoGif())
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}
