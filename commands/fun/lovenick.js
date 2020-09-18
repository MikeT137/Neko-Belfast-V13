module.exports ={
    name: "lovenick",
    description: "My special gift for my lovely trap",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        if(!args[0]) {
            const embed = new Discord.MessageEmbed()

            .setTitle('Hello my lovely trap, i know i wasnt the best soulmate that you coudl\'ve had but, i still hope you cherrish this special command that i secretly made only for you, and thank you for accepting the way i am and for the awesome memories we\'ve had so far, I LOVE YOU <3')
            .setImage('https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif')
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}