const TimeOut = new Set();
const {prefix} = require ('../../config.json');
const ms = require ('ms');

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
}