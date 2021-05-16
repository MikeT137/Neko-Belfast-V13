const {prefix} = require('../../config.json')
module.exports = {
    name: 'rps',
    description: 'It\'s just a command that lets you play rock paper scissors with the bot. And you can either type nothing and react with an emoji, or directly type what you want to use.',
    usage: `${prefix}rps / ${prefix}rps (rock/paper/scissors)`,
    category: 'fun',
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const result = acceptedReplies[Math.floor(Math.random() * acceptedReplies.length)];

        const embedR = new Discord.MessageEmbed().setAuthor(`I won!`, message.author.displayAvatarURL({ dynamic: true })).addField('Bot vs You', ':page_facing_up: vs :rock:').setColor('RED')
        const embedR2 = new Discord.MessageEmbed().setAuthor(`It\'s a tie!`, message.author.displayAvatarURL({ dynamic: true })).addField('Bot vs You', ':rock: vs :rock:').setColor('YELLOW')
        const embedR3 = new Discord.MessageEmbed().setAuthor(`You won!`, message.author.displayAvatarURL({ dynamic: true })).addField('Bot vs You', ':scissors: vs :rock:').setColor('GREEN')

        const embedP = new Discord.MessageEmbed().setAuthor(`I won!`, message.author.displayAvatarURL({ dynamic: true })).addField('Bot vs You', ':scissors: vs :page_facing_up:').setColor('RED')
        const embedP2 = new Discord.MessageEmbed().setAuthor(`It's a tie!`, message.author.displayAvatarURL({ dynamic: true })).addField('Bot vs You', ':page_facing_up: vs :page_facing_up:').setColor('YELLOW')
        const embedP3 = new Discord.MessageEmbed().setAuthor(`You won!`, message.author.displayAvatarURL({ dynamic: true })).addField('Bot vs You', ':rock: vs :page_facing_up:').setColor('GREEN')

        const embedS = new Discord.MessageEmbed().setAuthor(`I won!`, message.author.displayAvatarURL({ dynamic: true })).addField('Bot vs You', ':rock: vs :scissors:').setColor('RED')
        const embedS2 = new Discord.MessageEmbed().setAuthor(`It\'s a tie!`, message.author.displayAvatarURL({ dynamic: true })).addField('Bot vs You', ':scissors: vs :scissors:').setColor('YELLOW')
        const embedS3 = new Discord.MessageEmbed().setAuthor(`You won!`, message.author.displayAvatarURL({ dynamic: true })).addField('Bot vs You', ':page_facing_up: vs :scissors:').setColor('GREEN')

        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
        
                .setAuthor(`Rock-Paper-Scissors - Choose your weapon!`, message.author.displayAvatarURL({ dynamic: true }))
                .addField('Bot vs You', '? vs ?')
            message.channel.send(embed)
            .then(msg => {
                msg.react('🪨'),
                msg.react('📄'),
                msg.react('✂️')

                const filter = (reaction, user) => {
                    return ['🪨', '📄', '✂️'].includes(reaction.emoji.name) && user.id === message.author.id;
                }

                msg.awaitReactions(filter, { max: 1 })
                .then(collected => {
                    const reaction = collected.first();
                    if(reaction.emoji.name === '🪨') {
                        if (result === 'paper') {
                            msg.edit(embedR)
                        }else if (result === 'rock') {
                            msg.edit(embedR2)
                        }else {
                            msg.edit(embedR3)
                        }
                    }else if(reaction.emoji.name === '📄') {
                        if (result === 'scissors') {
                            msg.edit(embedP)
                        }else if (result === 'paper') {
                            msg.edit(embedP2)
                        }else {
                            msg.edit(embedP3) 
                        }   
                    }else if(reaction.emoji.name === '✂️') {
                        if (result === 'rock') {
                            msg.edit(embedS)
                        }else if (result === 'scissors') {
                            msg.edit(embedS2)
                        }else {
                            msg.edit(embedS3)
                        }
                    }
                })
            })
        }else if (!acceptedReplies.includes(args[0])) {
            message.channel.send(`You can only use: \`${acceptedReplies.join(', ')}\`, or nothing`);
        }
        switch (args[0]) {
            case 'rock':
                if (result === 'paper') {
                    message.channel.send(embedR);
                }else if (result === args[0]) {
                    message.channel.send(embedR2);
                }else {
                    message.channel.send(embedR3);
                }
            break;
            
            case 'paper':
                if (result === 'scissors') {
                    message.channel.send(embedP);
                }else if (result === args[0]) {
                    message.channel.send(embedP2);
                }else {
                    message.channel.send(embedP3);  
                }      
            break;

            case 'scissors':
                if (result === 'rock') {
                    message.channel.send(embedS);
                }else if (result === args[0]) {
                    message.channel.send(embedS2);
                }else {
                    message.channel.send(embedS3);
                }
            break;
        }
    }
}