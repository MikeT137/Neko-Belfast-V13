const {prefix} = require('../../config.json')
const fs = require('fs')
module.exports = {
    name:'divorce',
    description: "It makes you divorce from whoever you\'re married with. Works if you\'re already married.\nMade with the help of Monoxide",
    usage: `${prefix}divorce`,
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

        function findUserIndex(userId, data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].hasOwnProperty(userId)) {
                    return i;
                }
            }
            return false;
        }

        function findUser (userId, data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].hasOwnProperty(userId)) {
                    return data[i];
                }
            }
            return false;
        }
        let userIndex = findUser(message.author.id, married);
        if (!userIndex) {
            message.channel.send(`You aren't married yet!`)
        }else {
            fs.stat('./marriage.json', (err, stats) => {
                if(err) {
                    throw err;
                }
                // print file last modified date
                if (stats.mtime != lastModified) {
                    married = JSON.parse(fs.readFileSync('./marriage.json', 'utf8'))
                };  
                // [message.author.id]--;
                // [person.id]--;
                let divorceUser = findUser(message.author.id, married);
                let divorceUserIndex = findUserIndex(message.author.id, married);
                let divorcePartnerIndex = findUserIndex(divorceUser[message.author.id], married);

                if (divorceUserIndex < divorcePartnerIndex) {
                    married.splice(divorceUserIndex, 2)
                } else {
                    married.splice(divorcePartnerIndex, 2);
                }

                fs.writeFile('./marriage.json', JSON.stringify(married), () => {
                    if (!err) message.channel.send(`${message.author.username} and ${divorceUser[message.author.id]} have divorced!`);
                });
            })
        }
    }
}