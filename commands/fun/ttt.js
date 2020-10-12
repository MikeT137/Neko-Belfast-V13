module.exports = {
    name:'ttt',
    description: "The player plays tic tac toe with the bot",
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