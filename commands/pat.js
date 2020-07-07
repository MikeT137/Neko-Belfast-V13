module.exports = {
    name:'pat',
    description: "Pats a user",
    execute(message, argument){
        const Discord = require('discord.js');
        const author = message.author;
        const person = message.mentions.users.first();
        const random_pat = [
            'https://media.giphy.com/media/osYdfUptPqV0s/giphy.gif',
            'https://media.giphy.com/media/L2z7dnOduqEow/giphy.gif',
            'https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif',
            'https://media.giphy.com/media/109ltuoSQT212w/giphy.gif',
            'https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif',
            'https://media.tenor.com/images/a671268253717ff877474fd019ef73e9/tenor.gif',
            'https://i.pinimg.com/originals/2e/62/cd/2e62cd7491be4ec9f0ec210d648b80fd.gif',
            'https://thumbs.gfycat.com/FlimsyDeafeningGrassspider-size_restricted.gif',
            'https://em.wattpad.com/7eb08d93b3a97f02bc611f78d8608d4fabe79951/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4f4876343146766e4a7136665a773d3d2d3635313034303939312e31353634663135626330663632636161363839393833333730382e676966',
            'https://thumbs.gfycat.com/AgileHeavyGecko-max-1mb.gif',
        ]
        if(!argument[2] && message.mentions.members.size == 1) {
            const embed = new Discord.MessageEmbed()

            .setTitle(`${author.username} gave ${person.username} a pat...adorable`)
            .setImage(random_pat[Math.floor(Math.random() * random_pat.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}