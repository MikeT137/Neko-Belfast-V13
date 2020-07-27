module.exports = {
    name:'help',
    description: "Shows you the commands",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const PREFIX = 'b!';
        
        if (!args[0]){
            message.channel.send(`${message.author.username}, look in your DM for the commands!`)
            
            const embed = new Discord.MessageEmbed()
            .setTitle('Help')
            .addField('Prefix: ', PREFIX)
            .addField('Modertion Commands', 'ban - bans a member\nclear - clears the amount of messages you want\nhelp - shows this message\ninfo - shows bot information\nkick - kicks a member\nmute/unmute - mutes/unmutes someone\nwarn - warns a user')
            .addField('Self commands', 'avatar, blush, clap, cry, dance, facepalm, laugh, lewd, love, pout, smile, smug, yawn') //mooni
            .addField('Interactive commands (@someone)', 'boop, handhold, highfive, hug, kiss, lick, nom, pat, poke, punch, slap, snuggle, stare, wave')
            .addField('Fun commands', '8ball, meme')
            .setColor(0x4AEFBA)
            message.author.send(embed);

        }
    }
}