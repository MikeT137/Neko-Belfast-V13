module.exports = {
    name:'donate',
    description: "It sends a link of the patreon page",
    run: async (bot, message, args) => {
        if(!args[0]) {
            message.channel.send('Wanna support me? Donate here to become a patreon nya~\n') //link
        }else return;
    }
}