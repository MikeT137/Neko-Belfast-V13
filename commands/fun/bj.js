module.exports = {
    name: 'bj',
    description: 'The user plays blackjack with the job',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const card = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
        const c1 = [Math.floor(Math.random()*card.length)];
        const c2 = [Math.floor(Math.random()*card.length)];
        const b1 = card[c1];
        const b2 = card[c2];


        if(!args[0]){
            const embed = Discord.MessageEmbed()

            .setTitle('BlackJack')
            .addField('My Cards:', `${b1}, :red_square:`)
            .addField('Your Cards', `${b1}, ${b2}`)
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }

    }
}