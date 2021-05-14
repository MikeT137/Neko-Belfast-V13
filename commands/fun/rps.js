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
                            const embedR = new Discord.MessageEmbed()
        
                                .setAuthor(`I won!`, message.author.displayAvatarURL({ dynamic: true }))
                                .addField('Bot: vs You', ':page_facing_up: vs :rock:')
                                .setColor('RED')
                            msg.edit(embedR)
                        }else if (result === 'rock') {
                            const embedR2 = new Discord.MessageEmbed()
        
                                .setAuthor(`It\'s a tie!`, message.author.displayAvatarURL({ dynamic: true }))
                                .addField('Bot: vs You', ':rock: vs :rock:')
                                .setColor('YELLOW')
                            msg.edit(embedR2)
                        }else {
                            const embedR3 = new Discord.MessageEmbed()
        
                                .setAuthor(`You won!`, message.author.displayAvatarURL({ dynamic: true }))
                                .addField('Bot: vs You', ':scissors: vs :rock:')
                                .setColor('GREEN')
                            msg.edit(embedR3)
                        }
                    }else if(reaction.emoji.name === '📄') {
                        if (result === 'scissors') {
                            const embedP = new Discord.MessageEmbed()
        
                                .setAuthor(`I won!`, message.author.displayAvatarURL({ dynamic: true }))
                                .addField('Bot: vs You', ':scissors: vs :page_facing_up:')
                                .setColor('RED')
                            msg.edit(embedP)
                        }else if (result === 'paper') {
                            const embedP2 = new Discord.MessageEmbed()
        
                                .setAuthor(`It's a tie!`, message.author.displayAvatarURL({ dynamic: true }))
                                .addField('Bot: vs You', ':page_facing_up: vs :page_facing_up:')
                                .setColor('YELLOW')
                            msg.edit(embedP2)
                        }else {
                            const embedP3 = new Discord.MessageEmbed()
        
                                .setAuthor(`You won!`, message.author.displayAvatarURL({ dynamic: true }))
                                .addField('Bot: vs You', ':rock: vs :page_facing_up:')
                                .setColor('GREEN')
                            msg.edit(embedP3) 
                        }   
                    }else if(reaction.emoji.name === '✂️') {
                        if (result === 'rock') {
                            const embedS = new Discord.MessageEmbed()
        
                                .setAuthor(`I won!`, message.author.displayAvatarURL({ dynamic: true }))
                                .addField('Bot: vs You', ':rock: vs :scissors:')
                                .setColor('RED')
                            msg.edit(embedS)
                        }else if (result === 'scissors') {
                                const embedS2 = new Discord.MessageEmbed()
            
                                .setAuthor(`It\'s a tie!`, message.author.displayAvatarURL({ dynamic: true }))
                                .addField('Bot: vs You', ':scissors: vs :scissors:')
                                .setColor('YELLOW')
                            msg.edit(embedS2)
                        }else {
                            const embedS3 = new Discord.MessageEmbed()
        
                                .setAuthor(`You won!`, message.author.displayAvatarURL({ dynamic: true }))
                                .addField('Bot: vs You', ':page_facing_up: vs :scissors:')
                                .setColor('GREEN')
                            msg.edit(embedS3)
                        }
                    }
                })
            })
        }else if (!acceptedReplies.includes(args[0])) {
            message.channel.send(`You can only use: \`${acceptedReplies.join(', ')}\``);
        }
        switch (args[0]) {
            case 'rock':
                if (result === 'paper') {
                    message.channel.send(`I played ${result}. I won!`);
                }else if (result === args[0]) {
                    message.channel.send(`I played ${result}. It's a tie!`);
                }else {
                    message.channel.send(`I played ${result}. You won!`);
                }
            break;
            
            case 'paper':
                if (result === 'scissors') {
                    message.channel.send(`I played ${result}. I won!`);
                }else if (result === args[0]) {
                    message.channel.send(`I played ${result}. It's a tie!`);
                }else {
                    message.channel.send(`I played ${result}. You won!`);  
                }      
            break;

            case 'scissors':
                if (result === 'rock') {
                    message.channel.send(`I played ${result}. I won!`);
                }else if (result === args[0]) {
                    message.channel.send(`I played ${result}. It's a tie!`);
                }else {
                    message.channel.send(`I played ${result}. You won!`);
                }
            break;
        }
    }
}