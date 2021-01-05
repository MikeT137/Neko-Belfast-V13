module.exports = {
    name:'clap',
    description: "The user claps",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_clap = [
            'https://media.tenor.com/images/07908bbd4b8336d826c733de9b2f2988/tenor.gif',
            'https://media1.tenor.com/images/7460a26a07ef24d696eaac0b0ff4d5bf/tenor.gif?itemid=16461487',
            'https://pa1.narvii.com/6443/dcb690267167192e538563430a6612a27d0f2388_hq.gif',
            'https://66.media.tumblr.com/b5237659b9591cf1489ae73f8b5a326c/tumblr_nr24hvvHNn1uu7rcro1_400.gif',
            'https://i.gifer.com/Px2u.gif',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c1151233-3650-45b0-aca8-bbbd0a59253e/dahpi6h-4a6fd275-4ea4-4ce5-a8d4-ed259bad174b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzExNTEyMzMtMzY1MC00NWIwLWFjYTgtYmJiZDBhNTkyNTNlXC9kYWhwaTZoLTRhNmZkMjc1LTRlYTQtNGNlNS1hOGQ0LWVkMjU5YmFkMTc0Yi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.wvCQJ7J0Jf0KA3zUcYoPzl1f1DaaUKQn42sTe5uLRE4',
            'https://media.tenor.com/images/657f0c243282921245c0b9f4b1525c1b/tenor.gif',
            'https://media.tenor.com/images/49537d42c58c8f689d049977388b78c5/tenor.gif',
            'https://thumbs.gfycat.com/RightBigBluetickcoonhound-size_restricted.gif',
            'https://i.gifer.com/7ddb.gif',
        ]
        if (!args[0]){
            const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} claps their hands`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(random_clap[Math.floor(Math.random() * random_clap.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}