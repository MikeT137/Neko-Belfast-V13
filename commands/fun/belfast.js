const {prefix} = require('../../config.json');
module.exports = {
    name:'belfast',
    description: "It sends a random quote from the azur lane game and a random gif of the one and only, Belfast!",
    usage: `${prefix}belfast`,
    category: 'fun',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        let image;
        const line = [
            'It is a great pleasure to meet you. I am Belfast, the second ship of Edinburgh class. As the great cruiser in the royal navy, I serve as the head maid. I have participated in some military campaigns and saw the final moments of that Scharnhorst with my very own eyes... but those are only trifling things for a maid. If there is anything you need, please give me the order.',
            'Are you my master? It is a great pleasure to meet you. I am Belfast the maid. I shall devote this body to serving you.',
            'Welcome back, master. I have prepared some tea for you. Also I have put your documents in order over here. Please take your time working through them.',
            'To become an excellent commander, one must start by being self-confident. Master, please strive for the very best.',
            'Would you perhaps like some tea? Ah... if you desire something else, I also have coffee and whiskey ready.',
            'Sunbathing by the River Thames isn\'t so bad. However, I have to say my current lifestyle is much more...',
            'A gentleman does not touch a woman inelegantly. Please refrain from doing so to others.',
            'It is a maid\'s duty to devote all of herself to her master. Master, do you wish to take a look?',
            'Welcome back, master. I have prepared a small meal for you. This way, if you\'d please.',
            'This is a dish that I obtained through my connections within the fleet. Please slowly savor it... Was it to your taste?',
            'It is important to be aware of my master\'s intentions, and especially of the things my master isn\'t conscious of himself.... You believe that\'s bullying? Ufufu, lately I\'ve become somewhat fond of seeing your trouble face. I humbly ask you to overlook that.',
            'Are you awake? Ufufu, your sleeping face was so cute that I could not bring myself to wake you up.... What do you think of my lap pillow? Please enjoy it to your heart\'s content as long as you\'d like.',
            'This is slightly troubling.... I would have been satisfied with always attending to you and sometimes seeing you troubled, master, but... when you make such a big vow of me, it makes me want to serve you even more and long for more of your affection...',
            'Happy holiday, master. This is infused with my appreciation and love for you, a small token from Belfast, please accept it.'
        ]
        const random_bel = [
            'https://media.tenor.com/images/39f2224df78d9e915a2b59b73074ea05/tenor.gif',
            'https://thumbs.gfycat.com/ExcellentMediumBull-max-1mb.gif',
            'https://1.bp.blogspot.com/-Cz18jeQ60ho/YEa0zE-dsLI/AAAAAAACHM8/55t-pCOVI4AFihzFaqJGVrexJm5L9ldWACPcBGAsYHg/s1920/Azur%2BLane%2B-%2BBisoku%2BZenshin%2521%2B-%2BEpisode%2B9%2B-%2BBel-chan%2BThinks%2Bof%2BBelfast.gif',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9871ecf-dbb3-49ab-9193-b10683371e4c/de26lic-0eba58e6-e7bf-4d12-9af7-90cf21f8bcce.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5ODcxZWNmLWRiYjMtNDlhYi05MTkzLWIxMDY4MzM3MWU0Y1wvZGUyNmxpYy0wZWJhNThlNi1lN2JmLTRkMTItOWFmNy05MGNmMjFmOGJjY2UuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yP_pum2fLdZUBqhqYGzMYsN4goaImOFT_e1UPqgxkxk',
            'https://2.bp.blogspot.com/-xPuSDvwxSuU/XalWr1yXfQI/AAAAAAABqdc/8Clgt035JKUj8P4dcAKLpUtEcOzsfZKmgCKgBGAsYHg/s1600/Azur%2BLane%2B-%2BEpisode%2B3%2B-%2BBelfast%2BIntroduction.gif',
            'https://i.redd.it/v4hieyidhnx31.gif',
            'https://1.bp.blogspot.com/-zF0Tu9Kh5HA/XbKW_CanIpI/AAAAAAABrHo/prB9RBDhPj8majmiIXJ5wHXgavKCQm-pQCKgBGAsYHg/s1600/Azur%2BLane%2B-%2BEpisode%2B4%2B-%2BBelfast%2BHas%2Ba%2BWish.gif'
        ]
        const random_special = [
            'https://i.imgur.com/Ach6gQp.jpeg',
            'https://i.redd.it/yj12heak3ym21.png'
        ]

        if(Math.random() * 100 < 10) {
            image = random_special[Math.floor(Math.random() * random_special.length)]
        }else {
            image = random_bel[Math.floor(Math.random() * random_bel.length)]
        }

        message.channel.send(`"${line[Math.floor(Math.random() * line.length)]}"`)
        const embed = new Discord.MessageEmbed()
        
            .setDescription(`${args.join(' ')}`)
            .setImage(image)
            .setColor('#7d77df')
        message.channel.send(embed)
    }
}