module.exports = {
    name: 'ship',
    description: 'The user ships two other users',
    run: async (bot, message, args) => {
        const person = message.mentions.users.first();

        if(message.mentions.members.size == 2) {
            message.channel.send(`**${message.author.username}** :revolving_hearts: **${person.username} = ${message.author.username.slice(0, message.author.username.length / 2)}${person.username.slice(person.username.length / 2, person.username.length)}**`)
        }else {
            message.channel.send('You have to ping two users to ship them.')
        }
    }
}