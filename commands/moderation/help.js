module.exports = {
    name:'help',
    description: "It sends all the commands and categories of this bot",
    usage: 'b.help',
    category: 'moderation',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const links = '➤[Invite me!](https://discord.com/oauth2/authorize?client_id=727093236954431488&scope=bot&permissions=2146958847) ➤[Join my server!](https://discord.gg/xSkkeVf) ➤[Vote me!](https://top.gg/bot/727093236954431488/vote) ➤[Become my patreon!](https://www.patreon.com/user?u=10619598)'
        
        const fun = '\`blackjack\`, \`cookie\`, \`holiday\`, \`math\`, \`meme\`, \`rps\`, \`storyrun\`';
        const info = '\`avatar\`, \`botinfo\`, \`serverinfo\`, \`userinfo\`';
        const interractive = '\`apologise\`, \`bite\`, \`bonk\`, \`boop\`, \`brofist\`, \`cheer\`, \`cuddle\`, \`handhold\`, \`hug\`, \`kiss\`, \`lick\`, \`nuzzle\`, \`pat\`, \`poke\`, \`punch\`, \`shoot\`, \`slap\`, \`snuggle\`, \`stare\`, \`tickle\`, \`wave\`';
        const mod = '\`ban\`, \`clear\`, \`help\`, \`kick\`, \`mute\`, \`ping\`, \`suggest\`, \`unban\`, \`unmute\`';
        const random = '\`8ball\`, \`coinflip\`, \`rng\`, \`ship\`';
        const self = '\`blush\`, \`bored\`, \`clap\`, \`confused\`, \`cry\`, \`dab\`, \`dance\`, \`drool\`, \`facepalm\`, \`howl\`, \`laugh\`, \`nom\`, \`peek\`, \`pout\`, \`purr\`, \`rage\`, \`run\`, \`scared\`, \`shrug\`, \`sigh\`, \`sip\`, \`smile\`, \`smug\`, \`surprised\`, \`think\`, \`wag\`, \`wink\`, \`yawn\`';

        if(!args[0]) {
            const embed = new Discord.MessageEmbed()
            
                .setTitle('Help')
                .setDescription('React with an emoji, or type \`b.help (category)\` to get the commands of that specific category!')
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
                        let embedF = new Discord.MessageEmbed()
                        
                            .setTitle('Help - Fun')
                            .setDescription('Type \`b.help (command)\` to get information about a specific command')
                            .addField('Commands:', `${fun}`)
                            .addField('Want to support me?', `${links}`)
                            .setThumbnail(bot.user.displayAvatarURL())
                            .setColor('#7d77df')
                        msg.edit(embedF);
                    }else if(reaction.emoji.name === '🧐') {
                        let embedi = new Discord.MessageEmbed()
                        
                            .setTitle('Help - Info')
                            .setDescription('Type \`b.help (command)\` to get information about a specific command')
                            .addField('Commands:', `${info}`)
                            .addField('Want to support me?', `${links}`)
                            .setThumbnail(bot.user.displayAvatarURL())
                            .setColor('#7d77df')
                        msg.edit(embedi);
                    }else if(reaction.emoji.name === '🎭') {
                        let embedI = new Discord.MessageEmbed()

                            .setTitle('Help - Interactive Roleplay')
                            .setDescription('Type \`b.help (command)\` to get information about a specific command')
                            .addField('Commands:', `${interractive}`)
                            .addField('Want to support me?', `${links}`)
                            .setThumbnail(bot.user.displayAvatarURL())
                            .setColor('#7d77df')
                        msg.edit(embedI);
                    }else if(reaction.emoji.name === '🛠️') {
                        let embedM = new Discord.MessageEmbed()

                            .setTitle('Help - Moderation')
                            .setDescription('Type \`b.help (command)\` to get information about a specific command')
                            .addField('Commands:', `${mod}`)
                            .addField('Want to support me?', `${links}`)
                            .setThumbnail(bot.user.displayAvatarURL())
                            .setColor('#7d77df')
                        msg.edit(embedM);
                    }else if(reaction.emoji.name === '🎲') {
                        let embedR = new Discord.MessageEmbed()
                        
                            .setTitle('Help - Random')
                            .setDescription('Type \`b.help (command)\` to get information about a specific command')
                            .addField('Commands:', `${random}`)
                            .addField('Want to support me?', `${links}`)
                            .setThumbnail(bot.user.displayAvatarURL())
                            .setColor('#7d77df')
                        msg.edit(embedR);
                    }else if(reaction.emoji.name === '🤡') {
                        let embedS = new Discord.MessageEmbed()

                            .setTitle('Help - Self Roleplay')
                            .setDescription('Type \`b.help (command)\` to get information about a specific command')
                            .addField('Commands:', `${self}`)
                            .addField('Want to support me?', `${links}`)
                            .setThumbnail(bot.user.displayAvatarURL())
                            .setColor('#7d77df')
                        msg.edit(embedS);
                    }else return;
                })
            })
        }else if (args[0] == 'fun') {
            message.channel.send(embedF);
        }else if (args[0] == 'info') {
            message.channel.send(embedi);
        }else if (args[0] == 'interactive' || 'interractive roleplay') {
            message.channel.send(embedI);
        }else if (args[0] == 'moderation') {
            message.channel.send(embedM);
        }else if (args[0] == 'random') {
            message.channel.send(embedR);
        }else if (args[0] == 'self' || 'self roleplay') {
            message.channel.send(embedS);
        }else {
            const command = bot.commands.get(args[0].toLowerCase());

            if(command) {
                const embedC = new Discord.MessageEmbed()
                            
                    .setTitle(`Command: \`${command.name}\``)
                    .addField('Category:', `${command.category.toUpperCase()}`)
                    .addField('Description:', `${command.description}`)
                    .addField('Usage:', `${command.usage}`)
                    .setColor('#7d77df')
                message.channel.send(embedC);
            }else {
                message.channel.send('You typed the wrong category / command')
            }
        }
    }
}