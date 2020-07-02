module.exports = {
    name:'poke',
    description: "Pokes a user",
    execute(message, argument){
        const random_poke = [
            'https://media.giphy.com/media/pWd3gD577gOqs/giphy.gif',
            'https://media.giphy.com/media/aZSMD7CpgU4Za/giphy.gif',
            'https://media.giphy.com/media/FdinyvXRa8zekBkcdK/giphy.gif',
            'https://media.giphy.com/media/6ITiRKIryP3MI/giphy.gif',
            'https://media.tenor.com/images/6d227fd93656bd164985aad517a25c3f/tenor.gif',
            'https://i.pinimg.com/originals/b4/95/fb/b495fb19f4b9a1b04f48297b676c497b.gif',
            'https://i.gifer.com/SKql.gif',
            'https://media.moddb.com/cache/images/groups/1/1/84/thumb_620x2000/rxsyBWA.gif',
            'https://pa1.narvii.com/5679/d39dc10bcad2fd42a130de685d192c166d55f69a_hq.gif',
            'https://steamuserimages-a.akamaihd.net/ugc/957465844206544934/F541AE935C936C3BAF5250F8D2606CFECE17A2DA/',
        ]
        if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} pokes ${member}`);
            message.channel.send(random_poke[Math.floor(Math.random() * random_poke.length)]);
        }
    }
}