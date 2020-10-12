module.exports = {
    name:'storyrun',
    description: "It tells the story of a helpless boy (RUN)",
    run: async (bot, message, args) => {
        const Discord = require('discord.js')

        if(args[0]) {
            return;
        }else if (!args[0]) {
            const embed = new Discord.MessageEmbed()

            .setTitle('Tic Tac Toe')
            .addField(`${message.author.username} - :x: **VS** NekoBelfast - :o:`, ':black_large_square:')
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}