module.exports = {
    name: 'coins',
    description: 'The user checks their coin ammount',
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        const coins = require('../../coins.json')
        const userCoins = coins[message.author.id.coins];

        if(!coins[message.author.id]) {
            coins[message.author.id] = {
                coins: 0
            }
        }
        const embed = new Discord.MessageEmbed()

            .addField('Coins ammount', `${message.author.username} has ${userCoins}💸 coins!`)
            .setColor(0x4AEFBA)
        message.channel.send(embed);
    }
}