module.exports = {
    name:'avatar',
    description: "Shows you your avatar",
    run: async (bot, message, args) => {
        message.channel.send('*You\'re a 20 year old boy. You live in a small cabin inside a forest. You\'re there alone, no parents, no friends, no one. Its currently 17th of october. You thought that it would be really good if you chopped some wood with an axe so you can warm yourself when winter comes. You chop wood, doing your business. But suddenly you hear a weird sound coming from afar. In that moment you:\n👍 - still chop wood\n✊ - go inside your house\n👎 - take your axe with you and investigate the zone*\n\n**Select your choice:**')
        message.react('👍')
        message.react('✊')
        message.react('👎');
    }
}