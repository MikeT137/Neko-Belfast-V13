module.exports = {
    name: 'test',
    description: 'Just testing the emoji react',
    run: async(bot, message,sergs) => {
        message.channel.send('What type of icecream do you like?', '👍 - chocolate\n✊ - vanilla\n👎 - mint');
        await message.react('👍');
        await message.react('✊');
        await message.react('👎')

        .then((msg)=> {
            if(message.react == '👍') {
                msg.edit('you did it right boiii!!')
            }
        })
    }
}