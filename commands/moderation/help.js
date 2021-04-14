const {prefix} = require('../../config.json')
module.exports = {
    name:'help',
    description: "It sends all the commands and categories of this bot",
    usage: `${prefix}help`,
    category: 'moderation',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const links = '➤[Invite me!](https://discord.com/oauth2/authorize?client_id=727093236954431488&scope=bot&permissions=2146958847) ➤[Join my server!](https://discord.gg/M3sNjT8vt9) ➤[Vote me!](https://top.gg/bot/727093236954431488/vote) ➤[Donate!](buymeacoffee.com/mikuyoruka)'
        
        const funCommands = bot.commands.filter(({ category }) => category === "fun").map(({ name }) => name).join("\`, \`");
        const infoCommands = bot.commands.filter(({ category }) => category === "info").map(({ name }) => name).join("\`, \`");
        const interactiveCommands = bot.commands.filter(({ category }) => category === "interactive roleplay").map(({ name }) => name).join("\`, \`");
        const modCommands = bot.commands.filter(({ category }) => category === "moderation").map(({ name }) => name).join("\`, \`");
        const randomCommands = bot.commands.filter(({ category }) => category === "random").map(({ name }) => name).join("\`, \`");
        const selfCommands = bot.commands.filter(({ category }) => category === "self roleplay").map(({ name }) => name).join("\`, \`");

        if(!args[0]) {
            const embed = new Discord.MessageEmbed()
            
                .setTitle('Help')
                .setDescription('React with an emoji to get the commands of that specific category!')
                .addFields(
                    {name: ':smiley: - Fun', value: 'Commands that everyone can use if they\'re bored', inline: true },
                    {name: ':face_with_monocle: - Info', value: 'Commands that give more information about specific things', inline: true },
                    {name: ':performing_arts: - Interactive Roleplay', value: 'Commands that work WITH pinging', inline: true },
                    {name: ':tools: - Moderation', value: 'Commands that help admins to moderate their own servers', inline: true },
                    {name: ':game_die: - Random', value: 'Commands that give a random output everytime', inline: true },
                    {name: ':clown: - Self Roleplay', value: 'Commands that work WITHOUT pinging', inline: true }
                )
                .addField('Want to support me?', `${links}`)
                .setThumbnail(bot.user.displayAvatarURL())
                .setColor('#7d77df')
            message.channel.send(embed).then(msg => {
                msg.react('😃'),
                msg.react('🧐'),
                msg.react('🎭'),
                msg.react('🛠️'),
                msg.react('🎲'),
                msg.react('🤡')

                const filter = (reaction, user) => {
                    return ['😃', '🧐', '🎭', '🛠️', '🎲', '🤡'].includes(reaction.emoji.name) && user.id === message.author.id;
                };

                msg.awaitReactions(filter, { max: 1 }).then(collected => {
                    const reaction = collected.first();

                    if(reaction.emoji.name === '😃') {
                        const embedF = new Discord.MessageEmbed().setTitle('Help - Fun').setDescription('Type \`b.help (command)\` to get information about a specific command').addField('Commands:', `\`${funCommands}\``).addField('Want to support me?', `${links}`).setThumbnail(bot.user.displayAvatarURL()).setColor('#7d77df')
                        msg.edit(embedF);
                    }else if(reaction.emoji.name === '🧐') {
                        const embedi = new Discord.MessageEmbed().setTitle('Help - Info').setDescription('Type \`b.help (command)\` to get information about a specific command').addField('Commands:', `\`${infoCommands}\``).addField('Want to support me?', `${links}`).setThumbnail(bot.user.displayAvatarURL()).setColor('#7d77df')
                        msg.edit(embedi);
                    }else if(reaction.emoji.name === '🎭') {
                        const embedI = new Discord.MessageEmbed().setTitle('Help - Interactive Roleplay').setDescription('Type \`b.help (command)\` to get information about a specific command').addField('Commands:', `\`${interactiveCommands}\``).addField('Want to support me?', `${links}`).setThumbnail(bot.user.displayAvatarURL()).setColor('#7d77df')
                        msg.edit(embedI);
                    }else if(reaction.emoji.name === '🛠️') {
                        const embedM = new Discord.MessageEmbed().setTitle('Help - Moderation').setDescription('Type \`b.help (command)\` to get information about a specific command').addField('Commands:', `\`${modCommands}\``).addField('Want to support me?', `${links}`).setThumbnail(bot.user.displayAvatarURL()).setColor('#7d77df')
                        msg.edit(embedM);
                    }else if(reaction.emoji.name === '🎲') {
                        const embedR = new Discord.MessageEmbed().setTitle('Help - Random').setDescription('Type \`b.help (command)\` to get information about a specific command').addField('Commands:', `\`${randomCommands}\``).addField('Want to support me?', `${links}`).setThumbnail(bot.user.displayAvatarURL()).setColor('#7d77df')
                        msg.edit(embedR);
                    }else if(reaction.emoji.name === '🤡') {
                        const embedS = new Discord.MessageEmbed().setTitle('Help - Self Roleplay').setDescription('Type \`b.help (command)\` to get information about a specific command').addField('Commands:', `\`${selfCommands}\``).addField('Want to support me?', `${links}`).setThumbnail(bot.user.displayAvatarURL()).setColor('#7d77df')
                        msg.edit(embedS);
                    }else return;
                })
            })
        }else {
            const command = bot.commands.get(args[0].toLowerCase());

            if(command) {
                const embedC = new Discord.MessageEmbed()
                            
                    .setTitle(`Command: \`${command.name}\``)
                    .addField('Category:', `${command.category}`)
                    .addField('Description:', `${command.description}`)
                    .addField('Usage:', `${command.usage}`)
                    .setColor('#7d77df')
                message.channel.send(embedC);
            }else {
                message.channel.send('You typed the wrong command')
            }
        }
    }
}