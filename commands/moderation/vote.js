module.exports = {
    name: 'vote',
    description: 'The user can vote the bot or server in top.gg site',
    run: async(bot, message, args) => {
        const votebot = 'https://top.gg/bot/727093236954431488/vote';
        const voteserver = 'https://top.gg/servers/597109214707580940/vote';
        if(!args[0]) {
            message.channel.send('Tell me what vote link you want, \`bot\` or \`server\` ?')
        } else if(args[0] == 'bot') {
            message.channel.send(`You can vote for this bot here: ${votebot}`)
        } else if(args[0] == 'server') {
            message.channel.send(`You can vote for my server here: ${voteserver}`)
        }
    }
}