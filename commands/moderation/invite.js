module.exports = {
    name: 'invite',
    description: "Gives the user a link of the bot",
    run: async (bot, message, args) => {
        const creator = '❄Miku Yoruka❄#0916';
        const link = 'https://discord.com/oauth2/authorize?client_id=727093236954431488&scope=bot&permissions=2146958847';
        message.channel.send(`      𝑁𝑒𝑘𝑜 𝐵𝑒𝑙𝑓𝑎𝑠𝑡\n\nNeko Belfast is a bot that can do lots of stuff:\n\n\n:tools: - Moderation (example: ban, mute)\n\n:relieved: - Self Roleplay (example: smile, cry)\n\n:blush: - Interacctive Roleplay (hug, pat)\n\n:video_game: - Games and fun (example: avatar, blackjack, rock-papers-scisors\n\n\nNote: The creator isnt the best at making a lot of features but, hope you\'ll still find some enjoyment in it :3 For any problems(or if you just wanna give some suggestions, you can dm ${creator}\n\n\nBot Link: ${link}`)
    }
}