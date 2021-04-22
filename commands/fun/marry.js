const {prefix} = require('../../config.json')
const fs = require('fs')
module.exports = {
    name:'marry',
    description: "It asks the person being pinged, if they want to marry you. Works if both you and the person pinged aren\'t married.\nMade with the help of Monoxide",
    usage: `${prefix}marry (ping)`,
    category: 'fun',
    run: async (bot, message, args) => {
        let married = JSON.parse(fs.readFileSync('./marriage.json', 'utf8'))
        let lastModified;

        fs.stat('./marriage.json', (err, stats) => {
            if(err) {
                throw err;
            }
            // print file last modified date
            lastModified = stats.mtime;
        });
        const person = message.mentions.users.first();

        function findUser (userId, data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].hasOwnProperty(userId)) {
                    return data[i];
                }
            }
            return false;
        }

        if(message.mentions.members.size == 1) {
            if(person.id == message.author.id) {
                message.channel.send(`Uhm, i don\'t think you can do that ${message.author.username}, sorry.`)
            }else if(person.id === '727093236954431488') {
                message.channel.send(`Uhm, i wish i could, but this command only work between two users, i\'m sorry master! I love you nyaa~`)
            }else if(findUser(message.author.id, married)) {
                message.channel.send(`${message.author.username}!! You\'re already married!`)
            }else if(findUser(person.id, married)) {
                message.channel.send(`${person.username} is already married!`)
            }else {
                message.channel.send(`${person.username}!! ${message.author.username} wants to marry you. You have 1 minute to answer, what is your response?`)
                .then(msg => {
                    msg.react('✅'),
                    msg.react('❌')

                    const filter = (reaction, user) => {
                        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === person.id;
                    }

                    msg.awaitReactions(filter, { max: 1, time: 60000 })
                    .then(collected => {
                        const reaction = collected.first();
                        if(reaction.emoji.name === '✅') {
                            fs.stat('./marriage.json', (err, stats) => {
                                if(err) {
                                    throw err;
                                }
                            
                                // print file last modified date
                                if (stats.mtime != lastModified) {
                                    married = JSON.parse(fs.readFileSync('./marriage.json', 'utf8'))
                                };  
                                // [message.author.id]++;
                                // [person.id]++;
                                let log = {[message.author.id]: person.id}
                                let invertLog = {[person.id]: message.author.id}
                                married.push(log);
                                married.push(invertLog);

                                fs.writeFile('./marriage.json', JSON.stringify(married), function(err, result) {
                                    if(err) console.log('error', err);
                                    if(!err) return message.channel.send(`${message.author.username} and ${person.username} are now married! Congratulations :partying_face:`)
                                });
                            });
                        }else if(reaction.emoji.name === '❌') {
                            message.channel.send(`${person.username} declined, i\'m sorry ;-;`)
                        }          
                    })
                })
            }
        }else {
            message.channel.send('You have to ping one user to ask them for marriage.')
        }
    }
}