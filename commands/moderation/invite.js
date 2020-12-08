module.exports = {
    name: 'invite',
    description: "Gives the user an invite link of the bot, or the support server",
    run: async (bot, message, args) => {
        if(!args[0]) {
            message.channel.send('Pls tell me what invite link do you want? \`b.invite\`: \`bot\`, \`server\`')
        }else if(args[0] == 'bot') {
            const creator = 'Miku Yoruka#6107';
            const link = 'https://discord.com/oauth2/authorize?client_id=727093236954431488&scope=bot&permissions=2146958847';
            const title = '--------------------𝑁𝑒𝑘𝑜 𝐵𝑒𝑙𝑓𝑎𝑠𝑡--------------------';
            
            message.channel.send(`${title}\n\nNeko Belfast is a bot that can do lots of stuff:\n\n\n:tools: - Moderation (example: ban, mute)\n\n:clown: - Self Roleplay (example: smile, cry)\n\n:performing_arts: - Interacctive Roleplay (hug, pat)\n\n:video_game: - Games and fun (example: avatar, blackjack, rock-papers-scisors)\n\n:face_with_monocle: - Info (example: botinfo, serverinfo)\n\n\nNote: The creator isnt the best at making a lot of features but, hope you\'ll still find some enjoyment in this bot :3 For any problems(or if you just wanna give some suggestions, you can dm ${creator} or join the support server: \`b.invite server\`)\n\n\nBot Link: ${link}`)
        }else if(args[0] == 'server') {
            message.channel.send('Welcome to Neko Belfast\'𝑠 Official Server\nNeko Belfast\'s Official Server is a bot-making community, where we just talk and have fun; we expect everyone to get along in this server, that means:\n\n-No fighting\n-No arguing\n-No abusing\n-No bullying\n\nOn a more positive note, this server offer loads of cool stuff, for example:\n\n-Games\n-Memes\n-100+ emojis\n-Bots\nAnd more!!\n\nPartnerships: If you\'d like to have a partnership with this server, please dm our admins or the owner!! Please be patient until we respond.\n\nThere are a lot of incredible people here to chat with and play games! If you\'d like to join this server, click on the link below! \nHave a great day cuties!\n\nServer link: https://discord.gg/xSkkeVf')
        }else return;
    }
}