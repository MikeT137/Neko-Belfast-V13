const {prefix} = require('../../config.json')
module.exports = {
    name:'owofy',
    description: "It sends your exact message, but in the form of \"owo\"",
    usage: `${prefix}owofy message`,
    category: 'fun',
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        const nekoclient = require('nekos.life');
        const neko = new nekoclient();

        if(!args[0]) {
            message.channel.send('You need to type something to owofy it')
        }else {
            async function owofy() {
                message.delete();

                const owoTEXT = await neko.sfw.OwOify({text: message.content.split(' ').slice(1).join(' ')});
                const embed = new Discord.MessageEmbed()
        
                    .setAuthor(`${message.author.username} says:`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${owoTEXT.owo}`)
                    .setColor('#7d77df')
                message.channel.send(embed)
            }
            owofy();
        }
    }
}