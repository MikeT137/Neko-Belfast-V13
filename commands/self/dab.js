module.exports = {
    name: 'dab',
    description: 'The user dabs',
    run: async(bot, message, args) => {
        const Discord = require('discord.js');
        const random_dab = [
            'https://media.tenor.com/images/dece1e14366abd797a6f3183f77fc82e/tenor.gif',
            'https://media.tenor.com/images/64586f9db56c4af9a907c91448904d71/tenor.gif',
            'https://media.tenor.com/images/f29331e4557e2deaf14817d6fc230251/tenor.gif',
            'https://thumbs.gfycat.com/MiserlyIllinformedLeonberger-small.gif',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81c3283b-f4a1-4337-a976-da1f8dc91643/ddfzehb-559472ba-1ea3-4aaf-ad41-2e6d5df3eb8f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODFjMzI4M2ItZjRhMS00MzM3LWE5NzYtZGExZjhkYzkxNjQzXC9kZGZ6ZWhiLTU1OTQ3MmJhLTFlYTMtNGFhZi1hZDQxLTJlNmQ1ZGYzZWI4Zi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Cf3nSVQIjE6n9--Yn17hCJghrJQ_pNg0SBA4rbSdqFs',
            'https://media.tenor.com/images/639386c2eafef804d65c479d91187617/tenor.gif',
            'https://i.redd.it/c68meq0uxus11.jpg',
            'https://i.imgur.com/XhLJH7N.gif',
            'https://i.imgur.com/tpEYEnE.gif',
            'https://www.jing.fm/clipimg/full/268-2686543_transparent-anime-dab-gif.png',
        ]
        if(!args[0]) {
            const embed = new Discord.MessageEmbed()

            .setTitle(`${message.author.username} is dabbing ヽ(o⌣oヾ)`)
            .setImage(random_dab[Math.floor(Math.random() * random_dab.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}