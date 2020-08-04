module.exports = async(bot, message) => {
    if(message.content == 'hey' || message.content == 'Hey' || message.content == 'HEY')
        message.channel.send('hewwo');
}