module.exports = {
    name:'dab',
    description: "The user dabs",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_dab = [
            'https://media1.tenor.com/images/d13c16a8853e3b309db0ec7e573c4c94/tenor.gif?itemid=10617637',
            'https://media1.tenor.com/images/c9970c95b5290b6e51a546daf3b7e87e/tenor.gif?itemid=11805837',
            'https://imgur.com/1YSjbGo',
            'https://media.tenor.com/images/d68b5deb35e8c7ffad2efd182e0d4122/tenor.gif',
            'https://media.tenor.com/images/f29331e4557e2deaf14817d6fc230251/tenor.gif',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81c3283b-f4a1-4337-a976-da1f8dc91643/ddfzehb-559472ba-1ea3-4aaf-ad41-2e6d5df3eb8f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODFjMzI4M2ItZjRhMS00MzM3LWE5NzYtZGExZjhkYzkxNjQzXC9kZGZ6ZWhiLTU1OTQ3MmJhLTFlYTMtNGFhZi1hZDQxLTJlNmQ1ZGYzZWI4Zi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Cf3nSVQIjE6n9--Yn17hCJghrJQ_pNg0SBA4rbSdqFs'
        ]

        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
        
                .setAuthor(`${message.author.username} is dabbing (づ￣ ³￣)づ`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(random_dab[Math.floor(Math.random() * random_dab.length)])
                .setFooter('Powered by otakugifs.xyz')
                .setColor('#7d77df')
            message.channel.send(embed)
        }
    }
}