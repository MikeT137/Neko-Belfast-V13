const math = require('mathjs');
const Discord = require('discord.js');
module.exports = {
    name: 'math',
    description: "Solves a mathematic equation",
    run: async(bot, message, args) => {
        if(!args[0]){
            message.channel.send('You didn\'t add a calculation')
        }else{
        let resp;

        try{
            resp = math.evaluate(args.join(' '));

            const embed = new Discord.MessageEmbed()

                .setTitle('Calculation')
                .addField('Question', `${args.join(' ')} = ?`)
                .addField('Answer', `${resp}`)
                .setColor('#7d77df')
            message.channel.send(embed);
        }catch(e){
            message.channel.send('I can\'t solve that, please input a valid calculation.')
        }
        }
    }
}