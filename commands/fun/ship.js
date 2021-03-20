module.exports = {
    name: 'ship',
    description: 'The user ships two other users',
    run: async (bot, message, args) => {
        const mentions = message.mentions.users.first(2);
        const person = mentions[0];
        const person2 = mentions[1];

        const firstpart = person.username.slice(0, person.username.length / 2);

        if(message.mentions.members.size == 2) {
            firstpart.search(" ");

            if(firstpart.search(" ") === firstpart.length) {
                message.channel.send(`**${person.username}** :revolving_hearts: **${person2.username} = ${firstpart.slice(firstpart.length, -1)}${person2.username.slice(person2.username.length / 2, -1)}**`)
            }
            else {
                message.channel.send(`**${person.username}** :revolving_hearts: **${person2.username} = ${firstpart}${person2.username.slice(person2.username.length / 2, -1)}**`)
            }
        }else {
            message.channel.send('You have to ping two users to ship them.')
        }
    }
}