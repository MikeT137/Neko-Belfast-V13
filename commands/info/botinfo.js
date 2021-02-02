module.exports = {
    name:'botinfo',
    description: "Shows the bot's information",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const moment = require('moment');
        const {version} = require('../../package.json');
        const {author} = require('../../package.json');
        
        if (!args[0]){
            const embed = new Discord.MessageEmbed()

                .setThumbnail(bot.user.displayAvatarURL())
                .setDescription('**Information about this bot**')
                .addField('General', [
                    `\`Name:\` ${bot.user.tag} (${bot.user.id})`,
                    `\`Servers: \` ${bot.guilds.cache.size}`,
                    `\`Creation Date:\` ${moment(bot.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
                    `\`Version:\` ${version}.${bot.commands.size}`,
                    `\`Developer:\` ${author} :flag_ro:`
                ])
                .addField('Profile picture', [
                    `\`Original picture:\` https://www.reddit.com/r/AzureLane/comments/b2oc4c/neko_maid_belfast/`,
                    `\`Artist\`: u/Linkool21`
                ])
                .addField('Want to support me? You can do so by:', '[Inviting me!](https://discord.com/oauth2/authorize?client_id=727093236954431488&scope=bot&permissions=2146958847) [Joining my server!](https://discord.gg/xSkkeVf) [Voting me!](https://top.gg/bot/727093236954431488/vote) [Becoming my patreon!](https://www.patreon.com/user?u=10619598)')
                .addField('Special Message', '*Hello, Miku here! Thank you for choosing to use this bot, and for being so supportive with me, i know that it takes a while to fix bugs, and it may not be the best bot out there but still, thank you for using my bot, it means everything. Anyway, i hope you\'re enjoying the features of my bot so far, and in the meantime, stay safe and have a great day :heart:*')
                .setColor('#7d77df')
            message.channel.send(embed);
        }else return;
    }
}