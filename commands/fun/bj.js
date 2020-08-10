module.exports = {
    name: 'bj',
    description: 'The user plays blackjack with the job',
    run: async (bot, message, args) => {
        if(!message.guild.me.hasPermission("ADD_REACTIONS")) return message.channel.send('I dont have the permission \"add reactions\", to do this command')
        const Discord = require('discord.js');
        let playercard = Math.floor(Math.random()*11) + 2
        let playercard2 = Math.floor(Math.random()*11) + 2
        let playerTotal = playercard + playercard2;
        let playerArray = [];
        let botArray = [];
        let botcard = Math.floor(Math.random()*11) + 2
        let botcard2 = Math.floor(Math.random()*11) + 2
        
        playerArray.push(playercard)
        playerArray.push(playercard2)
        botArray.push(botcard)
        botArray.push(botcard2)

        const embed = new Discord.MessageEmbed()

        .setTitle('BlackJack')
        .setDescription(`Bot\'s Cards: ${botcard}, ?? Total: ??\nYour Cards: ${playercard}, ${playercard2} Total: ${playerTotal}`)
        .setColor(0x4AEFBA)
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

                if(playercount >= 21 && botcount >= 21){
                    embed.setDescription(`Bot\'s Cards: ${botArray}: ${botcount}\nYour Cards: ${playerArray}: ${playercount}\nI won!`)
                    .setColor("RED")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                }else if(playercount === 21 && botcount < 21) {
                    embed.setDescription(`Bot\'s Cards: ${botArray}: ${botcount}\nYour Cards: ${playerArray}: ${playercount}\nYou won!`)
                    .setColor("GREEN")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                }else if(botcount === 21 && playercount < 21) {
                    embed.setDescription(`Bot\'s Cards: ${botArray}: ${botcount}\nYour Cards: ${playerArray}: ${playercount}\nI won!`)
                    .setColor("RED")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                }else if(playercount === 21 && botcount > 21) {
                    embed.setDescription(`Bot\'s Cards: ${botArray}: ${botcount}\nYour Cards: ${playerArray}: ${playercount}\nYou won!`)
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

                    if(playercount >= 21 && botcount >= 21){
                        embed.setDescription(`Bot\'s Cards: ${botArray}: ${botcount}\nYour Cards: ${playerArray}: ${playercount}\nI won!`)
                        .setColor("RED")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(playercount === 21 && botcount < 21) {
                        embed.setDescription(`Bot\'s Cards: ${botArray}: ${botcount}\nYour Cards: ${playerArray}: ${playercount}\nYou won!`)
                        .setColor("GREEN")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(botcount === 21 && playercount < 21) {
                        embed.setDescription(`Bot\'s Cards: ${botArray}: ${botcount}\nYour Cards: ${playerArray}: ${playercount}\nI won!`)
                        .setColor("RED")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(playercount === 21 && botcount > 21) {
                        embed.setDescription(`Bot\'s Cards: ${botArray}: ${botcount}\nYour Cards: ${playerArray}: ${playercount}\nYou won!`)
                        .setColor("GREEN")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(playercount > botcount) {
                        embed.setDescription(`Bot\'s Cards: ${botArray}: ${botcount}\nYour Cards: ${playerArray}: ${playercount}\nYou won!`)
                        .setColor("GREEN")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(boutcount > playercount) {
                        embed.setDescription(`Bot\'s Cards: ${botArray}: ${botcount}\nYour Cards: ${playerArray}: ${playercount}\nI won!`)
                        .setColor("RED")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }
                })
                hit.on("collect", r => {
                    let playercard3 = Math.floor(Math.random()*11) + 2;
                    let botcard3 = Math.floor(Math.random()*11) + 2;
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

                    if(playercount >= 21 && botcount >= 21){
                        embed.setDescription(`Bot\'s Cards: ${botArray}: ${botcount}\nYour Cards: ${playerArray}: ${playercount}\nI won!`)
                        .setColor("RED")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(playercount === 21 && botcount < 21) {
                        embed.setDescription(`Bot\'s Cards: ${botArray}: ${botcount}\nYour Cards: ${playerArray}: ${playercount}\nYou won!`)
                        .setColor("GREEN")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(botcount === 21 && playercount < 21) {
                        embed.setDescription(`Bot\'s Cards: ${botArray}: ${botcount}\nYour Cards: ${playerArray}: ${playercount}\nI won!`)
                        .setColor("RED")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else if(playercount === 21 && botcount > 21) {
                        embed.setDescription(`Bot\'s Cards: ${botArray}: ${botcount}\nYour Cards: ${playerArray}: ${playercount}\nYou won!`)
                        .setColor("GREEN")
                        msg.edit(embed)
                        hit.stop()
                        stand.stop()
                    }else{
                        embed.setDescription(`Bot\'s Cards: ${botcard}, ?? Total: ??\nYour Cards: ${playerArray}: ${playercount}`)
                        embed.setColor(0x4AEFBA)
                        msg.edit(embed);
                    }
                })
            });
        });
    }
}