const Discord = require('discord.js');

module.exports = bot => {
    client.on("ready", () =>{
        client.user.setPresence({
            status: "online",  //You can show online, idle....
            game: {
                name: "b!help",  //The message shown
                type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
            }
        });
     });
}