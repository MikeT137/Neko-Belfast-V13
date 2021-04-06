module.exports = {
    name: 'blackjack',
    description: 'It\'s a command that let\'s you play blackjack with the bot. In blackjack your goal is to get as close as possible to the number 21. You can\'t see the bot\'s 2nd card, and your total points needs to be higher than the bot\'s total points. If you have more than 21 points, the bot wins and if you have the same points as the bot, the bot wins:\nYou have 2 options:\n:white_check_mark: - hit = draw another card\n:x: - stand = not drawing any cards and waiting for next turn',
    usage: 'b.blackjack',
    category: 'fun',
    run: async (bot, message, args) => {
        if(!message.guild.me.hasPermission("ADD_REACTIONS")) return message.channel.send('I don\'t have the permission \"add reactions\", to do this command')
        const Discord = require('discord.js');
        let playercard = Math.floor(Math.random()*9) + 2
        let playercard2 = Math.floor(Math.random()*9) + 2
        let botcard = Math.floor(Math.random()*9) + 2
        let botcard2 = Math.floor(Math.random()*9) + 2
        let playerTotal = playercard + playercard2;
        let playerArray = [];
        let botArray = [];
        
        playerArray.push(playercard)
        playerArray.push(playercard2)
        botArray.push(botcard)
        botArray.push(botcard2)

        const embed = new Discord.MessageEmbed()

            .setTitle('BlackJack')
            .setDescription(`Bot\'s Cards: ${botcard}, ?? Total: ??\nYour Cards: ${playercard}, ${playercard2} Total: ${playerTotal}`)
            .setColor('#7d77df')
        message.channel.send(embed).then(msg => {
            msg.react('✅').then(r => {
                msg.react('❌')
                const standFilter = (reaction, user) => 
                    reaction.emoji.name === '❌' && user.id === message.author.id;
                const hitFilter = (reaction, user) => 
                    reaction.emoji.name === '✅' && user.id === message.author.id;
                const stand = msg.createReactionCollector(standFilter, {
                    time: 60000
                });
                const hit = msg.createReactionCollector(hitFilter, {
                    time: 60000
                });
                let sum2 = botArray.reduce(function(a, b){
                    return a + b;
                }, 0);
                let botcount;
                botcount = sum2;

                let sum = playerArray.reduce(function(a, b){
                    return a + b;
                }, 0);
                let playercount;
                playercount = sum;

                if(playercount > 21 && botcount >= 21){
                    embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nI won!`)
                    .setColor("RED")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                }else if(playercount > 21){
                    embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nI won!`)
                    .setColor("RED")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                }else if(playercount === 21 && botcount < 21) {
                    embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nYou won!`)
                    .setColor("GREEN")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                }else if(botcount === 21 && playercount < 21) {
                    embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nI won!`)
                    .setColor("RED")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                }else if(botcount === 21 && playercount > 21) {
                    embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nI won!`)
                    .setColor("RED")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                }else if(playercount === 21 && botcount > 21) {
                    embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nYou won!`)
                    .setColor("GREEN")
                    msg.edit(embed)
                hit.stop()
                stand.stop()
                }
                stand.on("collect", r => {
                    let sum2 = botArray.reduce(function(a, b){
                        return a + b;
                    }, 0);
                    let botcount;
                    botcount = sum2;
    
                    let sum = playerArray.reduce(function(a, b){
                        return a + b;
                    }, 0);
                    let playercount;
                    playercount = sum;

                    if(playercount > 21 && botcount >= 21){
                        embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nI won!`)
                        .setColor("RED")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(playercount === 21 && botcount < 21) {
                        embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nYou won!`)
                        .setColor("GREEN")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(botcount === 21 && playercount < 21) {
                        embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nI won!`)
                        .setColor("RED")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(botcount === 21 && playercount > 21) {
                        embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nI won!`)
                        .setColor("RED")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(playercount === 21 && botcount > 21) {
                        embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nYou won!`)
                        .setColor("GREEN")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(21 >= playercount && playercount> botcount) {
                        embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nYou won!`)
                        .setColor("GREEN")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(21 >= botcount && botcount > playercount) {
                        embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nI won!`)
                        .setColor("RED")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else{
                        embed.setDescription(`Bot\'s Cards: ${botcard}, ?? Total: ??\nYour Cards: ${playerArray} Total: ${playercount}`)
                        msg.edit(embed);
                    }
                })
                hit.on("collect", r => {
                    let playercard3 = Math.floor(Math.random()*9) + 2;
                    let botcard3 = Math.floor(Math.random()*9) + 2;
                    playerArray.push(playercard3)
                    botArray.push(botcard3)
                    let sum2 = botArray.reduce(function(a, b){
                        return a + b;
                    }, 0);
                    let botcount;
                    botcount = sum2;
    
                    let sum = playerArray.reduce(function(a, b){
                        return a + b;
                    }, 0);
                    let playercount;
                    playercount = sum;

                    if(playercount > 21 && botcount >= 21){
                        embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nI won!`)
                        .setColor("RED")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(playercount > 21){
                        embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nI won!`)
                        .setColor("RED")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(playercount === 21 && botcount < 21) {
                        embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nYou won!`)
                        .setColor("GREEN")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(botcount === 21 && playercount < 21) {
                        embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nI won!`)
                        .setColor("RED")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(botcount === 21 && playercount > 21) {
                        embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nI won!`)
                        .setColor("RED")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(playercount === 21 && botcount > 21) {
                        embed.setDescription(`Bot\'s Cards: ${botArray} Total: ${botcount}\nYour Cards: ${playerArray} Total: ${playercount}\nYou won!`)
                        .setColor("GREEN")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else{
                        embed.setDescription(`Bot\'s Cards: ${botcard}, ?? Total: ??\nYour Cards: ${playerArray} Total: ${playercount}`)
                        msg.edit(embed);
                    }
                })
            });
        });
    }
}