const {prefix} = require('../../config.json');
module.exports = {
    name:'cookie',
    description: "The user gets a cookie or gives a cookie to another user",
    usage: `${prefix}cookie (no ping / ping)`,
    category: 'fun',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        const random_cookie = [
            'https://i.pinimg.com/originals/4f/63/83/4f638310f10f35282c4bfb393d973c22.gif',
            'https://media1.tenor.com/images/9a684862dd6a95ca16c5ecd6b02b119f/tenor.gif?itemid=5446986',
            'https://i.pinimg.com/originals/29/56/5f/29565f8f79ddbfa341d2c6579c7add83.gif',
            'https://1.bp.blogspot.com/-UeL23QH4l3I/WvYkOzOSwLI/AAAAAAABMJ8/RisnZXr3l0Q3QB5vHblxppCCfUj-rnbUwCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BToji%2Bno%2BMiko%2B-%2BEpisode%2B18%2B-%2BMai%2BGives%2BSayaka%2BCookie.gif',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d8aa80d-a00f-4ca5-817d-30fbc6bf33be/da1dya1-b214fb9a-1ee1-416f-ab91-904b1b7e2cd4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOGQ4YWE4MGQtYTAwZi00Y2E1LTgxN2QtMzBmYmM2YmYzM2JlXC9kYTFkeWExLWIyMTRmYjlhLTFlZTEtNDE2Zi1hYjkxLTkwNGIxYjdlMmNkNC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.HFBMErRx0VCtCKjp7vWE1RbuSbMi7_XgU5hn0VKT9Gc',
            'https://thumbs.gfycat.com/WelldocumentedMessyAsianpiedstarling-max-14mb.gif',
            'https://i.pinimg.com/originals/fc/39/65/fc3965c433c19f4492d616f975316c8c.gif',
            'https://i.gifer.com/3KSp.gif',
            'https://pa1.narvii.com/6729/31d1baa26c7c31e22b2e065f7dd4493abeb9ae5a_hq.gif',
            'https://64.media.tumblr.com/3fe6ba134426f050d1b6d81c9d72578d/tumblr_o0ohsePy0l1uxvvvzo1_500.gifv'
        ]
        message.delete();
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                const embed = new Discord.MessageEmbed()
        
                    .setAuthor(`${message.author.username} just got a cookie 🍪`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_cookie[Math.floor(Math.random() * random_cookie.length)])
                    .setColor('#7d77df')
                message.channel.send(embed)
            }else {
                const embed = new Discord.MessageEmbed()
        
                    .setAuthor(`${message.author.username} gave a cookie to ${person.username}, how nice 🍪`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${args.slice(1, args.length).join(' ')}`)
                    .setImage(random_cookie[Math.floor(Math.random() * random_cookie.length)])
                    .setColor('#7d77df')
                message.channel.send(embed)
            }
        }else {
            const embed = new Discord.MessageEmbed()
        
                .setAuthor(`${message.author.username} just got a cookie 🍪`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`${args.join(' ')}`)
                .setImage(random_cookie[Math.floor(Math.random() * random_cookie.length)])
                .setColor('#7d77df')
            message.channel.send(embed)
        }
    }
}