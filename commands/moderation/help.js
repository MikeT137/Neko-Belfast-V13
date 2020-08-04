module.exports = {
    name:'help',
    description: "Shows you the commands",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const PREFIX = 'b!';
        
        if(!args[0]) {
            const embed = new Discord.MessageEmbed()

                .addField('Help', 'Type b!help (command) to get information about a specific command')
                .addField('Modertion Commands', 'ban, clear, help, info, invite, kick, mute, unmute, warn')
                .addField('Self commands', 'avatar, blush, clap, cry, dance, facepalm, laugh, love, pout, purr, smile, smug, wag, yawn')
                .addField('Interactive commands (@someone)', 'boop, handhold, highfive, hug, kiss, lick, nom, pat, poke, punch, slap, snuggle, stare, wave')
                .addField('Fun commands', '8ball, math, meme')
                .setColor(0x4AEFBA)
            message.channel.send(embed);
        }

        switch (args[0]){
            case 'ban':
                message.channel.send('It bans a user: b!ban (ping)')
            break;

            case 'clear':
                message.channel.send('It deletes how many messages you want: b!clear (number)')
            break;

            case 'info':
                message.channel.send('It shows some information about the bot')
            break;

            case 'invite':
                message.channel.send('It gives the member an invite link of the bot')
            break;

            case 'kick':
                message.channel.send('It kicks someone out of a server: b!kick (number)')
            break;

            case 'mute':
                message.channel.send('It mutes a user temporarily: b!mute (number) (time: s, m, h, d)')
            break;

            case 'unmute':
                message.channel.send('It unmutes a user that is muted: b!unmute (number)')
            break;

            case 'warn':
                message.channel.send('It warns a user for a reason: b!warn (ping) (reason)')
            break;

            case 'avatar':
                message.channel.send('It shows yours or someone elses avatar: b!avatar / b!avatar (ping)')
            break;
            
            case 'blush':
                message.channel.send('It sends a blushing gif: b!blush')
            break;
                        
            case 'clap':
                message.channel.send('It sends a clapping gif: b!clap')
            break;
            
            case 'cry':
                message.channel.send('It sends a crying gif: b!cry')
            break;
                        
            case 'dance':
                message.channel.send('It sends a dancing gif: b!dance')
            break;
                        
            case 'facepalm':
                message.channel.send('It sends a facepalm gif: b!facepalm')
            break;
                        
            case 'laugh':
                message.channel.send('It sends a laughing gif: b!laugh')
            break;
                        
            case 'love':
                message.channel.send('It sends a hug gif to gain some love from belfast: b!love')
            break;
                        
            case 'pout':
                message.channel.send('It sends a pouting gif: b!pout')
            break;
                        
            case 'purr':
                message.channel.send('It sends a purring gif: b!purr')
            break;
                        
            case 'rage':
                message.channel.send('It sends a raging gif: b!rage')
            break;
                        
            case 'smile':
                message.channel.send('It sends a smiling gif: b!smile')
            break;
                        
            case 'smug':
                message.channel.send('It sends a smuging gif: b!smug')
            break;
                        
            case 'wag':
                message.channel.send('It sends a waging gif: b!wag')
            break;
                        
            case 'yawn':
                message.channel.send('It sends a yawning gif: b!yawn')
            break;
                        
            case 'cry':
                message.channel.send('It sends a crying gif: b!cry')
            break;
            
            case 'boop':
                message.channel.send('It sends a boop gif: b!boop (ping)')
            break;
                            
            case 'handhold':
                message.channel.send('It sends a handholding gif: b!handhold (ping)')
            break;
                        
            case 'highfive':
                message.channel.send('It sends a highfive gif: b!highfive (ping)')
            break;
                        
            case 'hug':
                message.channel.send('It sends a huging gif: b!hug (ping)')
            break;
                        
            case 'kiss':
                message.channel.send('It sends a kissing gif: b!kiss (ping)')
            break;
                        
            case 'lick':
                message.channel.send('It sends a licking gif: b!lick (ping)')
            break; 

            case 'nom':
                message.channel.send('It sends a eating gif: b!nom (ping)')
            break;
                        
            case 'pat':
                message.channel.send('It sends a petting gif: b!pat (ping)')
            break;
                        
            case 'poke':
                message.channel.send('It sends a poking gif: b!poke (ping)')
            break;
                        
            case 'punch':
                message.channel.send('It sends a punching gif: b!punch (ping)')
            break;
                        
            case 'slap':
                message.channel.send('It sends a slapping gif: b!slap (ping)')
            break;
                        
            case 'snuggle':
                message.channel.send('It sends a snuggle gif: b!snuggle (ping)')
            break;
                        
            case 'stare':
                message.channel.send('It sends a staring gif: b!stare (ping)')
            break;
                        
            case 'wave':
                message.channel.send('It sends a waving gif: b!wave (ping)')
            break;
  
            case '8ball':
                message.channel.send('It sends a random response to your question: b!8ball (question)')
            break;

            case 'math':
                message.channel.send('It solves an ecuation based on only 2 numbers: b!math (num1) (type) (num2))\ntypes: +, -, *, /, ^')
            break;

            case 'meme':
                message.channel.send('It sends a meme from a subreddit: b!meme (...)\n(nothing) -> random\ndank -> dankmemes\nmemes -> memes\nanime -> Animemes\nwholesome -> wholesomememes\nwholesomeanime / wanime -> wholesomeaniememes')
            break;
        }
    }
}