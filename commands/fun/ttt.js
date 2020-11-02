module.exports = {
    name: 'ttt',
    description: 'The user plays tic tac toe',
    run: async(bot, message, args) => {
        const Discord = require('discord.js')

        if(!args[0]) {
            const ttt = require("discord.js-tictactoe")
            const embed_color = "0x4AEFBA"
            const start_cmd = "ttt"
            ttt.run(bot, prefix, embed_color, start_cmd)
            /*const embed = new Discord.MessageEmbed()

            .setTitle('Tic Tac Toe')
            .addField(`${message.author.username}(:regional_indicator_x:) VS Neko Belfast(:regional_indicator_o:)`, ':blue_square::blue_square::blue_square:\n:blue_square::blue_square::blue_square:\n:blue_square::blue_square::blue_square:')
            .setColor(0x4AEFBA)
            message.channel.send(embed)*/
        }else return;
    }
}