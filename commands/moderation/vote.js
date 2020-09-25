module.exports = {
    name: 'vote',
    description: 'The user can vote the bot in top.gg bot list',
    run: async(bot, message, args) => {
        const votelink = 'https://top.gg/bot/727093236954431488/vote';
        message.channel.send(`You can vote for this bot here: ${votelink}`)
    }
}