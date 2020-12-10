const {prefix} = require ('../../config.json');
const fs = require('fs');
const coins = require('../../coins.json');

module.exports = async(bot, message) => {
    if(message.author.bot) return;
    if(!message.content.toLowerCase().startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.forEach(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const command = bot.commands.get(cmd);

    if(cmd.length == 0) return;
    if(!command) command = bot.commands.get(bot.aliases.get(cmd));
    if(command) command.run(bot, message, args);

    if(!coins[message.author.id]) {
        coins[message.author.id] = {
            coins: 0
        };
    }
    let coinAmount = Math.floor(Math.random() * 15) + 1;
    let baseAmount = Math.floor(Math.random() * 15) + 1;

    if(coinAmount === baseAmount) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins + coinAmount
        }
    }
    fs.writeFile("../../coins.json", JSON.stringify(coins))
}