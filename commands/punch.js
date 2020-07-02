module.exports = {
    name:'punch',
    description: "Punchess a user",
    execute(message, argument){
        const random_punch = [
            'https://media1.tenor.com/images/31686440e805309d34e94219e4bedac1/tenor.gif?itemid=4790446',
            'https://media.giphy.com/media/AlsIdbTgxX0LC/giphy.gif',
            'https://media1.tenor.com/images/6834932465e2659dc5b1ee38dfd42b44/tenor.gif?itemid=14615839',
            'https://i.pinimg.com/originals/d7/c3/0e/d7c30e46a937aaade4d7bc20eb09339b.gif',
            'https://media.tenor.com/images/483ede2afbcf3afca6465d0de112c0d5/tenor.gif',
            'https://i.pinimg.com/originals/92/f4/59/92f4595d3f6ac39b6c175eb3d454fec2.gif',
            'https://media1.tenor.com/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif?itemid=5012110',
            'https://i.chzbgr.com/full/8583163648/h2396FC8A/screw-you-power-star',
            'https://i.pinimg.com/originals/bc/96/17/bc9617a2460e4640fcd9cf474bea2c10.gif',
            'https://66.media.tumblr.com/992e4cac19f6a0ef68ea89ab5c3a59a0/tumblr_nrnfw7UZyR1uo5k7bo1_500.gif',
        ]
        if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} punches ${member}, aweee`);
            message.channel.send(random_punch[Math.floor(Math.random() * random_punch.length)]);
        }
    }
}