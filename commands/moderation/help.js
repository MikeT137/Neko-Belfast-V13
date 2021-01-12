module.exports = {
    name:'help',
    description: "Shows you the commands",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');

        if(!args[0]) {
            let embed = new Discord.MessageEmbed()

                .setTitle('Help')
                .setDescription('React with an emoji, or type \`b.help (category)\` to get the commands of that specific category!')
                .addField(':tools: - Moderation', 'This category has moderation commands that help admins to moderate their own servers')
                .addField(':clown: - Self Roleplay', 'This category has roleplaying commands that only work without pinging')
                .addField(':performing_arts: - Interactive Roleplay (@someone)', 'This category has roleplaying commands that only work with pinging')
                .addField(':smiley: - Fun', 'This category has fun commands that everyone can use if they\'re bored')
                .addField(':face_with_monocle: - Info', 'This category has info commands that can help you get more detailed information about specific things')
                .setThumbnail(bot.user.displayAvatarURL())
                .setColor('#7d77df')
            message.channel.send(embed).then(msg => {
                msg.react('🛠️'),
                msg.react('🤡'),
                msg.react('🎭'),
                msg.react('😃'),
                msg.react('🧐')

                const filter = (reaction, user) => {
                    return ['🛠️', '🤡', '🎭', '😃', '🧐'].includes(reaction.emoji.name) && user.id === message.author.id;
                };

                msg.awaitReactions(filter, { max: 1 }).then(collected => {
                    const reaction = collected.first();

                    if(reaction.emoji.name === '🛠️') {
                        let embedM = new Discord.MessageEmbed()

                            .setTitle('Help - Moderation')
                            .setDescription('Type \`b.help (command)\` to get information about a specific command')
                            .addField('Commands:', '\`ban\`, \`clear\`, \`donate\`, \`help\`, \`invite\`, \`kick\`, \`mute\`, \`ping\`, \`suggest\`, \`unban\`, \`unmute\`, \`vote\`')
                            .setThumbnail(bot.user.displayAvatarURL())
                            .setColor('#7d77df')
                        msg.edit(embedM);
                    }else if(reaction.emoji.name === '🤡') {
                        let embedS = new Discord.MessageEmbed()

                            .setTitle('Help - Self Roleplay')
                            .setDescription('Type \`b.help (command)\` to get information about a specific command')
                            .addField('Commands:', '\`blush\`, \`bored\`, \`clap\`, \`cry\`, \`dance\`, \`facepalm\`, \`hide\`, \`huh\`, \`laugh\`, \`pout\`, \`purr\`, \`rage\`, \`run\`, \`sip\`, \`smile\`, \`smug\`, \`think\`, \`wag\`, \`yawn\`')
                            .setThumbnail(bot.user.displayAvatarURL())
                            .setColor('#7d77df')
                        msg.edit(embedS);
                    }else if(reaction.emoji.name === '🎭') {
                        let embedI = new Discord.MessageEmbed()

                            .setTitle('Help - Interactive Roleplay (@someone)')
                            .setDescription('Type \`b.help (command)\` to get information about a specific command')
                            .addField('Commands:', '\`boop\`, \`cheer\`, \`cuddle\`, \`handhold\`, \`highfive\`, \`hug\`, \`kiss\`, \`lewd\`, \`lick\`, \`nom\`, \`nuzzle\`, \`pat\`, \`poke\`, \`punch\`, \`shoot\`, \`slap\`, \`snuggle\`, \`stare\`, \`wave\`')
                            .setThumbnail(bot.user.displayAvatarURL())
                            .setColor('#7d77df')
                        msg.edit(embedI);
                    }else if(reaction.emoji.name === '😃') {
                        let embedF = new Discord.MessageEmbed()
                        
                            .setTitle('Help - Fun')
                            .setDescription('Type \`b.help (command)\` to get information about a specific command')
                            .addField('Commands:', '\`8ball\`, \`blackjack\`, \`coinflip\`, \`holiday\`, \`love\`, \`math\`, \`rng\`, \`rps\`, \`storyrun\`')
                            .setThumbnail(bot.user.displayAvatarURL())
                            .setColor('#7d77df')
                        msg.edit(embedF);
                    }else if(reaction.emoji.name === '🧐') {
                        let embedinfo = new Discord.MessageEmbed()
                        
                            .setTitle('Help - Info')
                            .setDescription('Type \`b.help (command)\` to get information about a specific command')
                            .addField('Commands:', '\`avatar\`, \`botinfo\`, \`serverinfo\`, \`userinfo\`')
                            .setThumbnail(bot.user.displayAvatarURL())
                            .setColor('#7d77df')
                        msg.edit(embedinfo);
                    }
                })
            })
        }
        switch (args[0]){
            //Moderation
            case 'moderation':
                let embedM2 = new Discord.MessageEmbed()

                    .setTitle('Help - Moderation')
                    .setDescription('Type \`b.help (command)\` to get information about a specific command')
                    .addField('Commands:', '\`ban\`, \`clear\`, \`donate\`, \`help\`, \`invite\`, \`kick\`, \`mute\`, \`ping\`, \`suggest\`, \`unban\`, \`unmute\`, \`vote\`')
                    .setThumbnail(bot.user.displayAvatarURL())
                    .setColor('#7d77df')
                message.channel.send(embedM2);
            break;

            case 'ban':
                message.channel.send('It bans someone out of a server \`b.ban (ping)\`. Keep in mind:\n-the bot needs admin\n-you need admin as well\n-you can\'t ban someone that has admin\n-the bot needs to have a role higher than the person you are trying to ban(server settings -> roles)')
            break;

            case 'clear':
                message.channel.send('It deletes how many messages you want: \`b.clear (number)\`')
            break;

            case 'donate':
                message.channel.send('It sends a link of the patreon page where you can support the creator (by becoming a patreon ofc)')
            break;

            case 'invite':
                message.channel.send('It sends an invite link to either the bot or the bot\'s server: \`b.invite (server/bot)\`')
            break;

            case 'kick':
                message.channel.send('It kicks someone out of a server \`b.kick (ping)\`. Keep in mind:\n-the bot needs admin\n-you need admin as well\n-you can\'t kick someone that has admin\n-the bot needs to have a role higher than the person you are trying to kick(server settings -> roles)')
            break;

            case 'mute':
                message.channel.send('It mutes a user temporarily: \`b.mute (ping) (number + time: s, m, h, d)\`, BUT you need to create a role called \"BMuted\", its the only way it\'ll work: \`b.mute @(someone) 12s\`')
            break;

            case 'ping':
                message.channel.send('It shows the latency of the bot AKA how fast the bot is responding to user input: \`b.ping\`')
            break;

            case 'suggest':
                message.channel.send('If you have any suggestions about the bot, you can say it to the creator by using: \`b.suggest (message)\`')
            break;

            case 'unban':
                message.channel.send('It unbans a user: \`b.unban (user\'s ID)\`')
            break;

            case 'unmute':
                message.channel.send('It unmutes a user that is muted: \`b.unmute (ping)\`, BUT you need to have a role called \"BMuted\", its the only way it\'ll work')
            break;

            case 'vote':
                message.channel.send('It sends the link so the user can vote for the bot or the bot\'s server on the top.gg site: \`b.vote (bot/server)\`')
            break;

            //Self
            case 'self' || 'self roleplay':
                let embedS2 = new Discord.MessageEmbed()

                    .setTitle('Help - Self Roleplay')
                    .setDescription('Type \`b.help (command)\` to get information about a specific command')
                    .addField('Commands:', '\`blush\`, \`bored\`, \`clap\`, \`cry\`, \`dance\`, \`facepalm\`, \`hide\`, \`huh\`, \`laugh\`, \`pout\`, \`purr\`, \`rage\`, \`run\`, \`sip\`, \`smile\`, \`smug\`, \`think\`, \`wag\`, \`yawn\`')
                    .setThumbnail(bot.user.displayAvatarURL())
                    .setColor('#7d77df')
                message.channel.send(embedS2);
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
                        
            case 'dance':
                message.channel.send('It sends a dancing gif: \`b.dance\`')
            break;
                        
            case 'facepalm':
                message.channel.send('It sends a facepalm gif: \`b.facepalm\`')
            break;

            case 'hide':
                message.channel.send('It sends a hiding gif: \`b.hide\`')
            break;

            case 'huh':
                message.channel.send('It sends a confused gif: \`b.huh\`')
            break;
                        
            case 'laugh':
                message.channel.send('It sends a laughing gif: \`b.laugh\`')
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

            case 'sip':
                message.channel.send('It sends a sipping gif: \`b.sip\`')
            break;

            case 'run':
                message.channel.send('It sends a running gif: \`b.run\`')
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
                        
            case 'yawn':
                message.channel.send('It sends a yawning gif: \`b.yawn\`')
            break;
                        
            case 'cry':
                message.channel.send('It sends a crying gif: \`b.cry\`')
            break;
            
            //Interactive (@someone)
            case 'interractive' || 'interractive roleplay':
                let embedI2 = new Discord.MessageEmbed()

                    .setTitle('Help - Interactive Roleplay (@someone)')
                    .setDescription('Type \`b.help (command)\` to get information about a specific command')
                    .addField('Commands:', '\`boop\`, \`cheer\`, \`cuddle\`, \`handhold\`, \`highfive\`, \`hug\`, \`kiss\`, \`lewd\`, \`lick\`, \`nom\`, \`nuzzle\`, \`pat\`, \`poke\`, \`punch\`, \`shoot\`, \`slap\`, \`snuggle\`, \`stare\`, \`wave\`')
                    .setThumbnail(bot.user.displayAvatarURL())
                    .setColor('#7d77df')
                message.channel.send(embedI2);
            break;

            case 'boop':
                message.channel.send('It sends a boop gif: \`b.boop (ping)\`')
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
                        
            case 'highfive':
                message.channel.send('It sends a highfive gif: \`b.highfive (ping)\`')
            break;
                        
            case 'hug':
                message.channel.send('It sends a huging gif: \`b.hug (ping)\`')
            break;
                        
            case 'kiss':
                message.channel.send('It sends a kissing gif: \`b.kiss (ping)\`')
            break;

            case 'lewd':
                message.channel.send('It sends a blushing gif gif: \`b.lewd (ping)\`')
            break;
                        
            case 'lick':
                message.channel.send('It sends a licking gif: \`b.lick (ping)\`')
            break; 

            case 'nom':
                message.channel.send('It sends a eating gif: \`b.nom (ping)\`')
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
                        
            case 'stare':
                message.channel.send('It sends a staring gif: \`b.stare (ping)\`')
            break;
                        
            case 'wave':
                message.channel.send('It sends a waving gif: \`b.wave (ping)\`')
            break;
  
            //Fun
            case 'fun':
                let embedF2 = new Discord.MessageEmbed()
                        
                    .setTitle('Help - Fun')
                    .setDescription('Type \`b.help (command)\` to get information about a specific command')
                    .addField('Commands:', '\`8ball\`, \`blackjack\`, \`coinflip\`, \`holiday\`, \`love\`, \`math\`, \`rng\`, \`rps\`, \`storyrun\`')
                    .setThumbnail(bot.user.displayAvatarURL())
                    .setColor('#7d77df')
                message.channel.send(embedF2);
            break;

            case '8ball':
                message.channel.send('It sends a random response to your question: \`b.8ball (question)\`')
            break;

            case 'blackjack':
                message.channel.send('It\'s a command that let\'s you play blackjack with the bot. In blackjack your goal is to get as close as possible to the number 21. You can\'t see the bot\'s 2nd card, and your total points should be higher than the bot\'s total points. If you have more than 21 points, the bot wins and if you have the same points as the bot, the bot wins: \`b.blackjack\`\nYou have 2 options:\n:white_check_mark: - hit = draw another card\n:x: - stand = not drawing any cards and waiting for next turn')
            break;

            case 'coinflip':
                message.channel.send('It flips a coin: \`b.coinflip\`')
            break;

            case 'holiday':
                message.channel.send('When there is a holiday, the bot will send a gif about that holiday: \`b.holiday\`\nHolidays:\n\nNew Year - january 1st\nValentine\'s Day - february 14th\nEaster - april 8th\nHalloween - october 31st\nThanksgiving - november 25th\nChristmas - december 25th')
            break;

            case 'love':
                message.channel.send('It sends a hug gif to gain some love from belfast: \`b.love\`\nOR You can show some love to someone else \`b.love (ping)\`')
            break;

            case 'math':
                message.channel.send('It solves a  math equation: \`b.math x(operator)y\`\noperators:\n\`+\` = addition\n\`-\` = subtraction\n\`*\` = multiplication\n\`/\` = division\n\`%\` = remainder after division\n\`^\` = multiplication of a number with itself y times')
            break;

            /*case 'meme':
                message.channel.send('It sends a meme from a subreddit: \`b.meme (...)\`\n\`(nothing)\` -> random\n\`dank\` -> dankmemes\n\`memes\` -> memes\n\`anime\` -> goodanimemes\n\`wholesome\` -> wholesomememes\n\`wholesomeanime / wanime\` -> wholesomeaniememes')
            break;*/

            case 'rng':
                message.channel.send('It gives you a random number but you have to specify the maximum value: \`b.rng (biggest possible outcome you want)\`\nSidenote: your value has to be higher than 1')
            break;

            case 'rps':
                message.channel.send('Its just a command that lets you play rock paper scissors with the bot: \`b.rps (rock/paper/scissors)\`')
            break;

            case 'storyrun':
                message.channel.send('Its a choose your adventure type of story where you have to (read a lot) and react with emojis to make your choice, eventually you get an ending, now it depends if its good or bad, good luck: \`b.storyrun\`')
            break;

            //Info
            case 'info':
                let embedinfo2 = new Discord.MessageEmbed()
                        
                    .setTitle('Help - Info')
                    .setDescription('Type \`b.help (command)\` to get information about a specific command')
                    .addField('Commands:', '\`avatar\`, \`botinfo\`, \`serverinfo\`, \`userinfo\`')
                    .setThumbnail(bot.user.displayAvatarURL())
                    .setColor('#7d77df')
                message.channel.send(embedinfo2);
            break;

            case 'avatar':
                message.channel.send('It shows yours or someone elses avatar: \`b.avatar / b.avatar (ping)\`')
            break;

            case 'botinfo':
                message.channel.send('It sends information about the bot: \`b.botinfo\`')
            break;

            case 'serverinfo':
                message.channel.send('It sends information about the server you do the command in: \`b.serverinfo\`')
            break;

            case 'userinfo':
                message.channel.send('It sends information about the server you do the command in: \`b.userinfo (ping)\`')
            break;
        }
    }
}