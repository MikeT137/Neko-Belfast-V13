module.exports = {
    name:'help',
    description: "Shows you the commands",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        
        if(!args[0]) {
            const embed = new Discord.MessageEmbed()

                .setTitle(':pleading_face:Help')
                .setDescription('Type b.help (command) to get information about a specific command')
                .addField(':angry:Moderation Commands', 'ban, clear, help, info, invite, kick, mute, server, unmute, warn')
                .addField(':blush:Self commands', 'blush, clap, cry, dance, facepalm, huh, laugh, love, pout, rage, smile, smug, think, wag, yawn')
                .addField(':hugging_face:Interactive commands (@someone)', 'boop, cuddle, handhold, highfive, hug, kiss, lick, nom, pat, poke, punch, slap, snuggle, stare, wave')
                .addField(':smiley:Fun commands', '8ball, avatar, blackjack, coinflip, diceroll, math, meme, rps')
                .setImage('https://media.tenor.com/images/2ab5635c3ca5d3c2891666347e44e587/tenor.gif')
                .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
        switch (args[0]){
            //Moderation Commands
            case 'ban':
                message.channel.send('It bans a user: b.ban (ping)')
            break;

            case 'clear':
                message.channel.send('It deletes how many messages you want: b.clear (number)')
            break;

            case 'info':
                message.channel.send('It shows some information about the bot: b.info')
            break;

            case 'invite':
                message.channel.send('It gives the member an invite link of the bot: b.invite')
            break;

            case 'kick':
                message.channel.send('It kicks someone out of a server: b.kick (number)')
            break;

            case 'mute':
                message.channel.send('It mutes a user temporarily: b.mute (ping) (number) (time: s, m, h, d), BUT you need to have a role called \"BMuted\", its the only way it\'ll work')
            break;

            case 'server':
                message.channel.send('It send the link of the bot\'s official server: b.server')
            break;

            case 'unmute':
                message.channel.send('It unmutes a user that is muted: b.unmute (ping) (number), BUT you need to have a role called \"BMuted\", its the only way it\'ll work')
            break;

            case 'warn':
                message.channel.send('It warns a user for a reason: b.warn (ping) (reason)')
            break;

            //Self Commands
            case 'blush':
                message.channel.send('It sends a blushing gif: b.blush')
            break;
                        
            case 'clap':
                message.channel.send('It sends a clapping gif: b.clap')
            break;
            
            case 'cry':
                message.channel.send('It sends a crying gif: b.cry')
            break;
                        
            case 'dance':
                message.channel.send('It sends a dancing gif: b.dance')
            break;
                        
            case 'facepalm':
                message.channel.send('It sends a facepalm gif: b.facepalm')
            break;

            case 'huh':
                message.channel.send('It sends a confused gif: b.huh')
            break;
                        
            case 'laugh':
                message.channel.send('It sends a laughing gif: b.laugh')
            break;
                        
            case 'love':
                message.channel.send('It sends a hug gif to gain some love from belfast: b.love')
            break;
                        
            case 'pout':
                message.channel.send('It sends a pouting gif: b.pout')
            break;
                        
            case 'rage':
                message.channel.send('It sends a raging gif: b.rage')
            break;
                        
            case 'smile':
                message.channel.send('It sends a smiling gif: b.smile')
            break;
                        
            case 'smug':
                message.channel.send('It sends a smuging gif: b.smug')
            break;

            case 'think':
                message.channel.send('It sends a thinking gif: b.think')
            break;
                        
            case 'wag':
                message.channel.send('It sends a waging gif: b.wag')
            break;
                        
            case 'yawn':
                message.channel.send('It sends a yawning gif: b.yawn')
            break;
                        
            case 'cry':
                message.channel.send('It sends a crying gif: b.cry')
            break;
            
            //Interactive commands (@someone)
            case 'boop':
                message.channel.send('It sends a boop gif: b.boop (ping)')
            break;

            case 'cuddle':
                message.channel.send('It sends a cuddle gif: b.cuddle (ping)')
            break;
                            
            case 'handhold':
                message.channel.send('It sends a handholding gif: b.handhold (ping)')
            break;
                        
            case 'highfive':
                message.channel.send('It sends a highfive gif: b.highfive (ping)')
            break;
                        
            case 'hug':
                message.channel.send('It sends a huging gif: b.hug (ping)')
            break;
                        
            case 'kiss':
                message.channel.send('It sends a kissing gif: b.kiss (ping)')
            break;
                        
            case 'lick':
                message.channel.send('It sends a licking gif: b.lick (ping)')
            break; 

            case 'nom':
                message.channel.send('It sends a eating gif: b.nom (ping)')
            break;
                        
            case 'pat':
                message.channel.send('It sends a petting gif: b.pat (ping)')
            break;
                        
            case 'poke':
                message.channel.send('It sends a poking gif: b.poke (ping)')
            break;
                        
            case 'punch':
                message.channel.send('It sends a punching gif: b.punch (ping)')
            break;
                        
            case 'slap':
                message.channel.send('It sends a slapping gif: b.slap (ping)')
            break;
                        
            case 'snuggle':
                message.channel.send('It sends a snuggle gif: b.snuggle (ping)')
            break;
                        
            case 'stare':
                message.channel.send('It sends a staring gif: b.stare (ping)')
            break;
                        
            case 'wave':
                message.channel.send('It sends a waving gif: b.wave (ping)')
            break;
  
            //Fun commands
            case '8ball':
                message.channel.send('It sends a random response to your question: b.8ball (question)')
            break;

            case 'avatar':
                message.channel.send('It shows yours or someone elses avatar: b.avatar / b.avatar (ping)')
            break;

            case 'blackjack':
                message.channel.send('Its a command that lets you play blackjack with the bot. In blackjack your goal is to get as close as possible to the number 21. You cant see the bot\'s 2nd card, and you have to have higher point than the bot. If you more than 21 points, the bot wins and if you have the same points as the bot has, the bot wins: b.blackjack\nYou have 2 options:\n:white_check_mark: - hit = draw another card\n:x: - stand = stand and not draw any cards')
            break;

            case 'coinflip':
                message.channel.send('It flips a coin: b.coinflip')
            break;

            case 'diceroll':
                message.channel.send('It rolls a specific type of dice: b.diceroll (type of dice)\nTypes of dice: 4, 6, 8, 10, 12, 20')
            break;

            case 'math':
                message.channel.send('It solves a your math equation: b.math x(operator)y\noperator: +  -  *  /  %  ^')
            break;

            case 'meme':
                message.channel.send('It sends a meme from a subreddit: b.meme (...)\n(nothing) -> random\ndank -> dankmemes\nmemes -> memes\nanime -> Animemes\nwholesome -> wholesomememes\nwholesomeanime / wanime -> wholesomeaniememes')
            break;

            case 'rps':
                message.channel.send('Its just a command that lets you play rock paper scissors with the bot: b.rps (rock/paper/scissors)')
            break;
        }
    }
}