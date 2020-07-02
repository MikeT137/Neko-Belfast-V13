module.exports = {
    name:'lick',
    description: "Licks a user",
    execute(message, argument){
        const random_lick = [
            'https://media1.tenor.com/images/5ca31fd724f6baca41e366db4258a1e6/tenor.gif?itemid=12141726',
        ]
        if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} licks ${member}`);
            message.channel.send(random_lick[Math.floor(Math.random() * random_lick.length)]);
        }
    }
}