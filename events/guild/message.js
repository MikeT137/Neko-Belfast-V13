const fs = require('fs');
const {prefix} = require ('../../config.json');
const xp = require ('../../xp.json');

module.exports = async(bot, message) => {
    if(message.author.bot) return;
    if(!message.content.toLowerCase().startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.forEach(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    var command = bot.commands.get(cmd);

    if(cmd.length === 0) return;
    if(!command) command = bot.commands.get(bot.aliases.get(cmd));
    if(command) command.run(bot, message, args);

    //XP System
    const xpAdd = Math.floor(Math.random() * 7) + 8;
    const currentxp = xp[messahe.author.id].xp;
    const currentLvl = xp[messahe.author.id].level;
    const nextLvl = xp[message.author.id].level * 250;

    if(!xp[message.author.id]) {
        xp[message.author.id] = {
            xp: 0,
            level: 1
        }
    }
    xp[message.author.id].xp = currentxp + xpAdd;

    if(nextLvl <= xp[message.author.id].xp) {
        xp[message.author.id].level = currentLvl + 1;
    }
    fs.writeFile('../../xp.json', JSON.stringify(xp))
}