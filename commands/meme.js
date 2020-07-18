module.exports = {
    name:'meme',
    description: "Gives the user a meme",
    execute(message, argument){
        const Discord = require('discord.js');
        const cheerio = require('cheerio');
        const request = require('request');
        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q=" + "memes",
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) {
                return;
            }
            $ = cheerio.load(responseBody);
            var links = $(".image a.link");
            var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
            console.log(urls);
    
            if (!urls.length) {
                return;
            }
            message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        });
    }
}