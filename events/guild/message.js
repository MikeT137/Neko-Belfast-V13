module.exports = async(bot, message) => {
    const Discord = require ('dicsord.js')
    const {prefix} = require ('../../config.json');

    if(message.content === `<@${bot.user.id}>`) {
        let embed = new Discord.MessageEmbed()
            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
            .setColor('7d77df')
            .setDescription(`Hello ${message.author.username}, my name is **${bot.user.username}** and my prefix is **${prefix}**! If you need help type \`${prefix}help\`!`)
            
        message.channel.send(embed);
    }
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
}