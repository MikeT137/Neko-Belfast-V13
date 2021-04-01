module.exports = {
    name:'yuri',
    description: "yuri hentai image",
    run: async (bot, message, args) => {
    	const neko = require('nekos.life');
    	const {nsfw} = new neko();
 	    const embed = new Discord.MessageEmbed()

            .setAuthor(`- Yuri`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(nsfw.lesbian())
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}
