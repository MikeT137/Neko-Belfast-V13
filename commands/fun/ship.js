module.exports = {
    name: 'ship',
    description: 'The user ships two other users',
    run: async (bot, message, args) => {
        const mentions = message.mentions.users.array();
        const person = mentions[0];
        const person2 = mentions[1];

        if(message.mentions.members.size == 2) {
            message.channel.send(`**${person.username}** :revolving_hearts: **${person2.username} = ${person.username.slice(0, person.username.length / 2)}${person2.username.slice(person2.username.length / 2, -1)}**`)
        }else {
            message.channel.send('You have to ping two users to ship them.')
        }
    }
}