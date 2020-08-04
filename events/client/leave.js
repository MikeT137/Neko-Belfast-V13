module.exports = member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'welcome' || channel.name === 'Welcome' || channel.name === 'welcome-goodbye' || channel.name === 'Welcome-Goodbye' || channel.name === '👋┊welcome-goodbye' || channel.name === '👋┊Welcome-Goodbye')

    channel.send(`${member} left the server, oof`)
}