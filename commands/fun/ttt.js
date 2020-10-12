module.exports = {
    name:'ttt',
    description: "The player plays tic tac toe with the bot",
    run: async (bot, message, args) => {
        const Discord = require('discord.js')

        if(args[0]) {
            return;
        }else if (!args[0]) {
            const ttt = require("tictactoe")
            const prefix = "!"
            const embed_color = "0x4AEFBA"
            const start_cmd = "ttt"
            ttt.run(bot, prefix, embed_color, start_cmd)
            /*const embed = new Discord.MessageEmbed()

            .setTitle('Tic Tac Toe')
            .addField(`${message.author.username} - :regional_indicator_x: **VS** NekoBelfast - :regional_indicator_o:`, ':blue_square::blue_square::blue_square:\n:blue_square::blue_square::blue_square:\n:blue_square::blue_square::blue_square:')
            .setColor(0x4AEFBA)
            message.channel.send(embed);*/
        }
    }
}