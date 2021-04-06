const math = require('mathjs');
const Discord = require('discord.js');
module.exports = {
    name: 'math',
    description: "It solves a math equation\`\nOperations:\n\`+\` = addition\n\`-\` = subtraction\n\`*\` = multiplication\n\`/\` = division\n\`%\` = remainder after division\n\`^\` = exponentiation\n\`log(x, y)\` = inverse function to exponentiation\n\`sqrt()\` = square root",
    usage: 'b.math (equation)',
    category: 'fun',
    run: async(bot, message, args) => {
        if(!args[0]){
            message.channel.send('You didn\'t add a calculation')
        }else{
            let resp;

            try{
                resp = math.evaluate(args.join(' '));

                if(resp >= 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                    message.channel.send('M-master, that\'s too big nya!')
                }else {
                    const embed = new Discord.MessageEmbed()

                        .setTitle('Calculation')
                        .addField('Question', `${args.join(' ')} = ?`)
                        .addField('Answer', `${resp}`)
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }
            }catch(e){
                message.channel.send('I can\'t solve that, please input a valid calculation.')
            }
        }
    }
}