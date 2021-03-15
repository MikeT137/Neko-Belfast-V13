module.exports = {
    name:'enlarge',
    description: "It sends a bigger pic of the emoji sent",
    run: async (bot, message, args) => {
        const emoji = bot.emojis.cache.get(args[0].id);

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