module.exports = {
    name:'help',
    description: "Shows you the commands",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const links = '➤[Invite me!](https://discord.com/oauth2/authorize?client_id=727093236954431488&scope=bot&permissions=2146958847) ➤[Join my server!](https://discord.gg/xSkkeVf) ➤[Vote me!](https://top.gg/bot/727093236954431488/vote) ➤[Become my patreon!](https://www.patreon.com/user?u=10619598)'
        
        const fun = '\`blackjack\`, \`cookie\`, \`holiday\`, \`math\`, \`meme\`, \`rps\`, \`storyrun\`';
        const info = '\`avatar\`, \`botinfo\`, \`serverinfo\`, \`userinfo\`';
        const interractive = '\`bite\`, \`bonk\`, \`boop\`, \`brofist\`, \`cheer\`, \`cuddle\`, \`handhold\`, \`hug\`, \`kiss\`, \`lick\`, \`nuzzle\`, \`pat\`, \`poke\`, \`punch\`, \`shoot\`, \`slap\`, \`snuggle\`, \`sorry\`, \`stare\`, \`tickle\`, \`wave\`';
        const mod = '\`ban\`, \`clear\`, \`help\`, \`kick\`, \`mute\`, \`ping\`, \`suggest\`, \`unban\`, \`unmute\`';
        const random = '\`8ball\`, \`coinflip\`, \`rng\`, \`ship\`';
        const self = '\`blush\`, \`bored\`, \`clap\`, \`confused\`, \`cry\`, \`dab\`, \`dance\`, \`drool\`, \`facepalm\`, \`howl\`, \`laugh\`, \`nom\`, \`peek\`, \`pout\`, \`purr\`, \`rage\`, \`run\`, \`scared\`, \`shrug\`, \`sigh\`, \`sip\`, \`smile\`, \`smug\`, \`surprised\`, \`think\`, \`wag\`, \`wink\`, \`yawn\`';

        if(!args[0]) {
            let embed = new Discord.MessageEmbed()
            
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
        }else if (args[0] == cmd){
            const embedC = new Discord.MessageEmbed()
                        
                .setTitle(`Command: ${cmd.name}`)
                .setDescription(`Description: ${cmd.description}`)
                .addField('Usage:', `b.${cmd.name}`)
                .setColor('#7d77df')
            message.channel.send(embedC);
            //Fun
            /*case 'fun':
                let embedF2 = new Discord.MessageEmbed()
                        
                    .setTitle('Help - Fun')
                    .setDescription('Type \`b.help (command)\` to get information about a specific command')
                    .addField('Commands:', `${fun}`)
                    .addField('Want to support me?', `${links}`)
                    .setThumbnail(bot.user.displayAvatarURL())
                    .setColor('#7d77df')
                message.channel.send(embedF2);
            break;

            case 'blackjack':
                message.channel.send('It\'s a command that let\'s you play blackjack with the bot. In blackjack your goal is to get as close as possible to the number 21. You can\'t see the bot\'s 2nd card, and your total points should be higher than the bot\'s total points. If you have more than 21 points, the bot wins and if you have the same points as the bot, the bot wins: \`b.blackjack\`\nYou have 2 options:\n:white_check_mark: - hit = draw another card\n:x: - stand = not drawing any cards and waiting for next turn')
            break;

            case 'cookie':
                message.channel.send('The user gets a cookie or gives a cookie to another user: \`b.cookie (no ping / ping)\`')
            break;

            case 'holiday':
                message.channel.send('When there is a holiday, the bot will send a gif about that holiday: \`b.holiday\`\nHolidays:\n\nNew Year - january 1st\nValentine\'s Day - february 14th\nEaster - april 8th\nHalloween - october 31st\nThanksgiving - november 25th\nChristmas - december 25th')
            break;

            case 'math':
                message.channel.send('It solves a math equation: \`b.math (equation)\`\nOperations:\n\`+\` = addition\n\`-\` = subtraction\n\`*\` = multiplication\n\`/\` = division\n\`%\` = remainder after division\n\`^\` = exponentiation\n\`log(x, y)\` = inverse function to exponentiation\n\`sqrt()\` = square root')
            break;

            case 'meme':
                message.channel.send('It sends a meme off of a random subreddit, those being: dankmemes, memes, meme, Animemes, goodanimemes: \`b.meme\`')
            break;

            case 'rps':
                message.channel.send('It\'s just a command that lets you play rock paper scissors with the bot: \`b.rps (rock/paper/scissors)\`')
            break;

            case 'storyrun':
                message.channel.send('It\'s a choose your adventure type of story where you have to (read a lot) and react with emojis to make your choice, eventually you get an ending, now it depends if it\'s good or bad, good luck: \`b.storyrun\`')
            break;

            //Info
            case 'info':
                let embedi2 = new Discord.MessageEmbed()
                        
                    .setTitle('Help - Info')
                    .setDescription('Type \`b.help (command)\` to get information about a specific command')
                    .addField('Commands:', `${info}`)
                    .addField('Want to support me?', `${links}`)
                    .setThumbnail(bot.user.displayAvatarURL())
                    .setColor('#7d77df')
                message.channel.send(embedi2);
            break;

            case 'avatar':
                message.channel.send('It shows yours or someone else\'s avatar: \`b.avatar / b.avatar (ping)\`')
            break;

            case 'botinfo':
                message.channel.send('It sends information about the bot: \`b.botinfo\`')
            break;

            case 'serverinfo':
                message.channel.send('It sends information about the server you do the command in: \`b.serverinfo\`')
            break;

            case 'userinfo':
                message.channel.send('It sends information about yourself, or the pinged user. The information is taken from the server you do the command in: \`b.userinfo (ping)\`')
            break;

            //Interactive (@someone)
            case 'interractive' || 'interractive roleplay':
                let embedI2 = new Discord.MessageEmbed()

                    .setTitle('Help - Interactive Roleplay')
                    .setDescription('Type \`b.help (command)\` to get information about a specific command')
                    .addField('Commands:', `${interractive}`)
                    .addField('Want to support me?', `${links}`)
                    .setThumbnail(bot.user.displayAvatarURL())
                    .setColor('#7d77df')
                message.channel.send(embedI2);
            break;

            case 'bite':
            case 'bonk':
            case 'boop':
            case 'brofist':
            case 'cheer':
            case 'cuddle':
            case 'handhold':
            case 'hug':
            case 'kiss':
            case 'lick':
            case 'nuzzle':
            case 'pat':
            case 'poke':
            case 'punch':
            case 'shoot':
            case 'slap':
            case 'snuggle':
            case 'sorry':
            case 'stare':
            case 'tickle':
            case 'wave':
                message.channel.send(`It sends a ${args[0]}ing gif: \`b.${args[0]} (ping)\``)
            break;

            //Moderation
            case 'moderation':
                let embedM2 = new Discord.MessageEmbed()

                    .setTitle('Help - Moderation')
                    .setDescription('Type \`b.help (command)\` to get information about a specific command')
                    .addField('Commands:', `${mod}`)
                    .addField('Want to support me?', `${links}`)
                    .setThumbnail(bot.user.displayAvatarURL())
                    .setColor('#7d77df')
                message.channel.send(embedM2);
            break;

            case 'ban':
                message.channel.send('It bans someone out of a server \`b.ban (ping)\`. Keep in mind:\n-the bot needs admin\n-you need admin as well\n-you can\'t ban someone that has admin\n-the bot needs to have a role higher than the person you are trying to ban(server settings -> roles)')
            break;

            case 'clear':
                message.channel.send('It deletes how many messages you want (as long as you\'re an admin), however you can\'t delete more than 100 messages: \`b.clear (number)\`')
            break;

            case 'kick':
                message.channel.send('It kicks someone out of a server \`b.kick (ping)\`. Keep in mind:\n-the bot needs admin\n-you need admin as well\n-you can\'t kick someone that has admin\n-the bot needs to have a role higher than the person you are trying to kick(server settings -> roles)')
            break;

            case 'mute':
                message.channel.send('It mutes a user temporarily: \`b.mute (ping) (number + time: s, m, h, d)\`, BUT you need to create a role called \"BMuted\", it\'s the only way it\'ll work: \`b.mute @(someone) 12s\`')
            break;

            case 'ping':
                message.channel.send('It shows the latency of the bot AKA how fast the bot is responding to user input: \`b.ping\`')
            break;

            case 'suggest':
                message.channel.send('If you have any suggestions about the bot, you can send it to the creator by using: \`b.suggest (message)\`')
            break;

            case 'unban':
                message.channel.send('It unbans a user: \`b.unban (user\'s ID)\`')
            break;

            case 'unmute':
                message.channel.send('It unmutes a user that is muted: \`b.unmute (ping)\`, BUT you need to have a role called \"BMuted\", it\'s the only way it\'ll work')
            break;

            //Random
            case 'random':
                let embedR2 = new Discord.MessageEmbed()
                        
                    .setTitle('Help - Random')
                    .setDescription('Type \`b.help (command)\` to get information about a specific command')
                    .addField('Commands:', `${random}`)
                    .addField('Want to support me?', `${links}`)
                    .setThumbnail(bot.user.displayAvatarURL())
                    .setColor('#7d77df')
                message.channel.send(embedR2);
            break;

            case '8ball':
                message.channel.send('It sends a random response to your question: \`b.8ball (question)\`')
            break;

            case 'coinflip':
                message.channel.send('It flips a coin: \`b.coinflip\`')
            break;

            case 'rng':
                message.channel.send('It gives you a random number but you have to specify the maximum value: \`b.rng (number)\`\nSidenote: your value has to be higher than 1')
            break;

            case 'ship':
                message.channel.send('It sends a random level of love-affinity between 2 users:\n-yourself with another user: \`b.ship (ping)\`\n-two other users: \`b.ship (ping) (ping)\`')
            break;

            //Self
            case 'self' || 'self roleplay':
                let embedS2 = new Discord.MessageEmbed()

                    .setTitle('Help - Self Roleplay')
                    .setDescription('Type \`b.help (command)\` to get information about a specific command')
                    .addField('Commands:', `${self}`)
                    .addField('Want to support me?', `${links}`)
                    .setThumbnail(bot.user.displayAvatarURL())
                    .setColor('#7d77df')
                message.channel.send(embedS2);
            break;

            case 'blush':
            case 'bored':
            case 'clap':
            case 'confused':
            case 'cry':
            case 'dab':
            case 'dance':
            case 'droll':
            case 'facepalm':
            case 'howl':
            case 'laugh':
            case 'nom':
            case 'peek':
            case 'pout':
            case 'purr':
            case 'rage':
            case 'run':
            case 'scared':
            case 'shrug':
            case 'sigh':
            case 'sip':
            case 'smile':
            case 'smug':
            case 'surprised':
            case 'think':
            case 'wag':
            case 'wink':
            case 'yawn':
                message.channel.send(`It sends a ${args[0]}ing gif: \`b.${args[0]}\``)
            break;*/
        }
    }
}