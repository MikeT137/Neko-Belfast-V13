module.exports = {
    name:'botinfo',
    description: "Shows the bot's information",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const moment = require('moment');
        const {version} = require('../../package.json');
        const {author} = require('../../package.json');
        //'Im Belfast:heart:, your lovely neko maid that will be happy to serve you in any way you want, but have patience with me since i learn new things very slowly nya~')

        if (!args[0]){
            const embed = new Discord.MessageEmbed()

                .setThumbnail(bot.user.displayAvatarURL())
                .setDescription('**Information about this bot**')
                .addField('General', [
                    `\`Name:\` ${bot.user.tag} (${bot.user.id})`,
                    `\`Commands:\` ${bot.commands.size}`,
                    `\`Creation Date:\` ${moment(bot.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
                    `\`Version:\` ${version}`,
                    `\`Bot developer:\` ${author} :flag_td:`
                ])
                .addField('Special Message', '*Hello, Miku here! Thank you for choosing to use this bot, and for being so supportive, i know that it takes a while to fix bugs, and it may not be the best bot out there but still, thank you for using my bot, it means everything. Hope you\'re enjoy the features on it so far in the meantime, stay safe and have a fluffy day :heart:*')
                .setColor(0x4AEFBA)
            message.channel.send(embed);
        }else return;
    }
}