module.exports = {
    name:'help',
    description: "Shows you the commands",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const links = '➤[Invite me!](https://discord.com/oauth2/authorize?client_id=727093236954431488&scope=bot&permissions=2146958847) ➤[Join my server!](https://discord.gg/xSkkeVf) ➤[Vote me!](https://top.gg/bot/727093236954431488/vote) ➤[Become my patreon!](https://www.patreon.com/user?u=10619598)'
        
        const fun = '\`blackjack\`, \`cookie\`, \`holiday\`, \`math\`, \`rps\`, \`storyrun\`';
        const info = '\`avatar\`, \`botinfo\`, \`serverinfo\`, \`userinfo\`';
        const interractive = '\`bite\`, \`boop\`, \`brofist\`, \`cheer\`, \`cuddle\`, \`handhold\`, \`hug\`, \`kiss\`, \`lick\`, \`nuzzle\`, \`pat\`, \`poke\`, \`punch\`, \`shoot\`, \`slap\`, \`snuggle\`, \`sorry\`, \`stare\`, \`tickle\`, \`wave\`';
        const mod = '\`ban\`, \`clear\`, \`help\`, \`kick\`, \`mute\`, \`ping\`, \`suggest\`, \`unban\`, \`unmute\`';
        const random = '\`8ball\`, \`coinflip\`, \`love\`, \`rng\`';
        const self = '\`awoo\`, \`blush\`, \`bored\`, \`clap\`, \`cry\`, \`dab\`, \`dance\`, \`facepalm\`, \`headbang\`, \`huh\`, \`laugh\`, \`nom\`, \`peek\`, \`pout\`, \`purr\`, \`rage\`, \`run\`, \`shrug\`, \`sigh\`, \`sip\`, \`smile\`, \`smug\`, \`think\`, \`wag\`, \`wink\`, \`yawn\`';

        if(!args[0]) {
            let embed = new Discord.MessageEmbed()
            
                .setTitle('Help')
                .setDescription('React with an emoji, or type \`b.help (category)\` to get the commands of that specific category!')
                .addFields(
                    {name: ':smiley: - Fun', value: 'Commands that everyone can use if they\'re bored', inline: true },
                    {name: ':face_with_monocle: - Info', value: 'Commands that give more information about specific things', inline: true },
                    {name: ':performing_arts: - Interactive Roleplay (@someone)', value: 'Commands that only work WITH pinging', inline: true },
                    {name: ':tools: - Moderation', value: 'Commands that help admins to moderate their own servers', inline: true },
                    {name: ':game_die: - Random', value: 'Commands that give a random output everytime', inline: true },
                    {name: ':clown: - Self Roleplay', value: 'Commands that only work WITHOUT pinging', inline: true }
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

                            .setTitle('Help - Interactive Roleplay (@someone)')
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
        }
        switch (args[0]){
            //Fun
            case 'fun':
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

                    .setTitle('Help - Interactive Roleplay (@someone)')
                    .setDescription('Type \`b.help (command)\` to get information about a specific command')
                    .addField('Commands:', `${interractive}`)
                    .addField('Want to support me?', `${links}`)
                    .setThumbnail(bot.user.displayAvatarURL())
                    .setColor('#7d77df')
                message.channel.send(embedI2);
            break;

            case 'bite':
                message.channel.send('It sends a biting gif: \`b.bite (ping)\`')
            break;

            case 'boop':
                message.channel.send('It sends a boop gif: \`b.boop (ping)\`')
            break;

            case 'brofist':
                message.channel.send('It sends a brofist gif: \`b.brofist (ping)\`')
            break;

            case 'cheer':
                message.channel.send('It sends a cheering up gif: \`b.cheer (ping)\`')
            break;

            case 'cuddle':
                message.channel.send('It sends a cuddle gif: \`b.cuddle (ping)\`')
            break;
                            
            case 'handhold':
                message.channel.send('It sends a handholding gif: \`b.handhold (ping)\`')
            break;
                        
            case 'hug':
                message.channel.send('It sends a huging gif: \`b.hug (ping)\`')
            break;
                        
            case 'kiss':
                message.channel.send('It sends a kissing gif: \`b.kiss (ping)\`')
            break;
                        
            case 'lick':
                message.channel.send('It sends a licking gif: \`b.lick (ping)\`')
            break; 

            case 'nuzzle':
                message.channel.send('It sends a nuzzling gif: \`b.nuzzle (ping)\`')
            break;
                        
            case 'pat':
                message.channel.send('It sends a petting gif: \`b.pat (ping)\`')
            break;
                        
            case 'poke':
                message.channel.send('It sends a poking gif: \`b.poke (ping)\`')
            break;
                        
            case 'punch':
                message.channel.send('It sends a punching gif: \`b.punch (ping)\`')
            break;

            case 'shoot':
                message.channel.send('It sends a shooting gif: \`b.shoot (ping)\`')
            break;
                        
            case 'slap':
                message.channel.send('It sends a slapping gif: \`b.slap (ping)\`')
            break;
                        
            case 'snuggle':
                message.channel.send('It sends a snuggle gif: \`b.snuggle (ping)\`')
            break;

            case 'sorry':
                message.channel.send('It sends a sorry gif: \`b.sorry (ping)\`')
            break;
                        
            case 'stare':
                message.channel.send('It sends a staring gif: \`b.stare (ping)\`')
            break;

            case 'tickle':
                message.channel.send('It sends a tickling gif: \`b.tickle (ping)\`')
            break;
                        
            case 'wave':
                message.channel.send('It sends a waving gif: \`b.wave (ping)\`')
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

            case 'love':
                message.channel.send('It sends a random level of love-affinity between 2 users: \`b.love (ping)\`')
            break;

            case 'rng':
                message.channel.send('It gives you a random number but you have to specify the maximum value: \`b.rng (number)\`\nSidenote: your value has to be higher than 1')
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

            case 'awoo':
                message.channel.send('It sends a howling gif: \`b.awoo\`')
            break;

            case 'blush':
                message.channel.send('It sends a blushing gif: \`b.blush\`')
            break;

            case 'bored':
                message.channel.send('It sends a bored gif: \`b.bored\`')
            break;
                        
            case 'clap':
                message.channel.send('It sends a clapping gif: \`b.clap\`')
            break;
            
            case 'cry':
                message.channel.send('It sends a crying gif: \`b.cry\`')
            break;

            case 'dab':
                message.channel.send('It sends a dabing gif: \`b.dab\`')
            break;
                        
            case 'dance':
                message.channel.send('It sends a dancing gif: \`b.dance\`')
            break;
                        
            case 'facepalm':
                message.channel.send('It sends a facepalm gif: \`b.facepalm\`')
            break;

            case 'headbang':
                message.channel.send('It sends a headbanging gif: \`b.headbang\`')
            break;

            case 'huh':
                message.channel.send('It sends a confused gif: \`b.huh\`')
            break;
                        
            case 'laugh':
                message.channel.send('It sends a laughing gif: \`b.laugh\`')
            break;

            case 'nom':
                message.channel.send('It sends a eating gif: \`b.nom\`')
            break;

            case 'peek':
                message.channel.send('It sends a peeking gif: \`b.peek\`')
            break;
                        
            case 'pout':
                message.channel.send('It sends a pouting gif: \`b.pout\`')
            break;

            case 'purr':
                message.channel.send('It sends a neko gif: \`b.purr\`')
            break;
                        
            case 'rage':
                message.channel.send('It sends a raging gif: \`b.rage\`')
            break;

            case 'run':
                message.channel.send('It sends a running gif: \`b.run\`')
            break;

            case 'shrug':
                message.channel.send('It sends a shrug gif: \`b.shrug\`')
            break;

            case 'sigh':
                message.channel.send('It sends a sigh gif: \`b.sigh\`')
            break;

            case 'sip':
                message.channel.send('It sends a sipping gif: \`b.sip\`')
            break;
                        
            case 'smile':
                message.channel.send('It sends a smiling gif: \`b.smile\`')
            break;
                        
            case 'smug':
                message.channel.send('It sends a smuging gif: \`b.smug\`')
            break;

            case 'think':
                message.channel.send('It sends a thinking gif: \`b.think\`')
            break;
                        
            case 'wag':
                message.channel.send('It sends a waging gif: \`b.wag\`')
            break;

            case 'wink':
                message.channel.send('It sends a winking gif: \`b.wink\`')
            break;
                        
            case 'yawn':
                message.channel.send('It sends a yawning gif: \`b.yawn\`')
            break;
        }
    }
}