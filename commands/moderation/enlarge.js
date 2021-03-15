module.exports = {
    name:'enlarge',
    description: "It sends a bigger pic of the emoji sent",
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        const emojiID = new Discord.GuildEmoji().id
        const emoji = bot.emojis.get(emojiID);

        emojiID.animated = emoji.animated;

        if(!args[0]) {
            message.channel.send('You need to tell me which emoji you want me to enlarge')
        }else {
            await message.channel.send({files: [
            {
                attachment: emoji.url,
                name: `https://cdn.discordapp.com/emojis/${emoji.id}.png`
            }
            ]});
        }
    }
}