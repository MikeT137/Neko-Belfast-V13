module.exports = {
    name:'enlarge',
    description: "It sends a bigger pic of the emoji sent",
    run: async (bot, message, args) => {
        if(!args[0]) {
            message.channel.send('You need to tell me which emoji you want me to enlarge')
        }else {
            const emoji = bot.emojis.cache.get(args[0].id);
            await message.channel.send({files: [
            {
                name: `https://cdn.discordapp.com/emojis/${emoji.id}.png`
            }
            ]});
        }
    }
}