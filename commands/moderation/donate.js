module.exports = {
    name:'donate',
    description: "It sends a link of the patreon page",
    run: async (bot, message, args) => {
        if(!args[0]) {
            message.channel.send('Wanna support me? Donate here to become a patreon nya~\nhttps://www.patreon.com/user?u=10619598')
        }else return;
    }
}