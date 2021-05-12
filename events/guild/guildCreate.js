const Discord = require('discord.js');
const {prefix} = require('../../config.json')
module.exports = (bot, guild) => {
    const channel = guild.channels.cache.find(m => m.type === 'text' && m.permissionsFor(guild.me).has('SEND_MESSAGES'));
    
    const embed = new Discord.MessageEmbed()

        .setThumbnail(bot.user.displayAvatarURL())
        .setDescription('**Hello master! My name is Belfast, it will be my pleasure to serve you the best way possible nyaa~**')
        .addField('Thank you + Help', `*Hello, Miku here (developer of this bot)! Thank you for choosing to use this bot, and for being so supportive with me, it means everything.\n\nAnyway, if you have trouble using the bot, you can type \`${prefix}help\`, or if you want to give suggestions, you can use \`${prefix}suggest\`, but please be very explicit. Have a great day <3*`)
        .addField('Want to support me?', '➤[Invite me!](https://discord.com/oauth2/authorize?client_id=727093236954431488&scope=bot&permissions=2146958847) ➤[Join my server!](https://discord.gg/M3sNjT8vt9) ➤[Vote me!](https://top.gg/bot/727093236954431488/vote) ➤[Donate!](https://www.buymeacoffee.com/mikuyoruka)')
        .setColor('#7d77df')
    channel.send(embed).catch(e => console.log(e));
}