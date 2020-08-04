const math = require('mathjs');
const Discord = require('discord.js');
module.exports = {
    name: 'math',
    description: "Solves a mathematic equation",
    run: async(bot, message, args) => {
        if(!args[0]){
            message.channel.send('You didnt add a calculation')
        }
        let resp;

        try{
            resp = math.eval(args.join(' '));
        }catch(e){
            message.channel.send('Sorry, please input a valid calculation')
        }
        const embed = new Discord.MessageEmbed()

        .setTitle('Calculation')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)
        .setColor(0x4AEFBA)
        message.channel.send(embed);
    }
}