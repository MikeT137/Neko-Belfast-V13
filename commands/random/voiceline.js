const {prefix} = require('../../config.json')
module.exports = {
    name: 'voiceline',
    description: 'It sends a random Belfast (english) voiceline taken from the Azur Lane game.',
    usage: `${prefix}voiceline`,
    category: 'random',
    run: async (bot, message, args) => {
        let line = [
            'It is a great pleasure to meet you. I am Belfast, the second ship of Edinburgh class. As the great cruiser in the royal navy, I serve as the head maid. I have participated in some military campaigns and saw the final moments of that Scharnhorst with my very own eyes... but those are only trifling things for a maid. If there is anything you need, please give me the order.',
            'Are you my master? It is a great pleasure to meet you. I am Belfast the maid. I shall devote this body to serving you.',
            'Welcome back, master. I have prepared some tea for you. Also I have put your documents in order over here. Please take your time working through them.',
            'To become an excellent commander, one must start by being self-confident. Master, please strive for the very best.',
            'Would you perhaps like some tea? Ah... if you desire something else, I also have coffee and whiskey ready.',
            'Sunbathing by the River Thames isn\'t so bad. However, I have to say my current lifestyle is much more...',
            'A gentleman does not touch a woman inelegantly. Please refrain from doing so to others.',
            'It is a maid\'s duty to devote all of herself to her master. Master, do you wish to take a look?',
            'Welcome back, master. I have prepared a small meal for you. This way, if you\'d please.',
            'This is a dish that I obtained through my connections within the fleet. Please slowy savor it... Was it to your taste?',
            'It is important to be aware of my master\'s intentions, and especially of the things my master isn\'t conscious of himself.... You believe that\'s bullying? Ufufu, lately I\'ve become somewhat fond of seeing your trouble face. I humbly ask you to overlook that.',
            'Are you awake? Ufufu, your sleeping face was so cute that I could not bring myself to wake you up.... What do you think of my lap pillow? Please enjoy it to your heart\'s content as long as you\'d like.',
            'This is slightly troubling.... I would have been satisfied with always attending to you and sometimes seeing you troubled, master, but... when you make such a big vow of me, it makes me want to server you even more and long for more of your affection...',
            'Happy holiday, master. This is infused with my appreciation and love for you, a small token from Belfast, please accept it.'
        ]
        let voiceline = line[Math.floor(Math.random() * line.length)]
        message.channel.send(`\"${voiceline}\"`);
    }
}