module.exports = {
    name:'boop',
    description: "Boops a user's nose",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const person = message.mentions.users.first();
        /*
        // url Async requesting function
        function httpGetAsync(theUrl, callback)
        {
            // create the request object
            var xmlHttp = new Collection();
        
            // set the state change callback to capture when the response comes in
            xmlHttp.onreadystatechange = function()
            {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                {
                    callback(xmlHttp.responseText);
                }
            }
        
            // open as a GET call, pass in the url and set async = True
            xmlHttp.open("GET", theUrl, true);
        
            // call send with no params as they were passed in on the url string
            xmlHttp.send(null);
        
            return;
        }
        
        // callback for the top 8 GIFs of search
        function tenorCallback_search(responsetext)
        {
            // parse the json response
            var response_objects = JSON.parse(responsetext);
        
            top_10_gifs = response_objects["results"];
        
            // load the GIFs -- for our example we will load the first GIFs preview size (nanogif) and share size (tinygif)
        
            document.getElementById("preview_gif").src = top_10_gifs[0]["media"][0]["nanogif"]["url"];
        
            document.getElementById("share_gif").src = top_10_gifs[0]["media"][0]["tinygif"]["url"];
        
            return;
        
        }
        
        
        // function to call the trending and category endpoints
        function grab_data()
        {
            // set the apikey and limit
            var apikey = "LIVDSRZULELA";
            var lmt = 8;
        
            // test search term
            var search_term = "anime boop";
        
            // using default locale of en_US
            var search_url = "https://api.tenor.com/v1/search?q=" + search_term + "&key=" + apikey + "&limit=" + lmt;
        
            httpGetAsync(search_url,tenorCallback_search);
        
            // data will be loaded by each call's callback
            return;
        }
        
        
        // SUPPORT FUNCTIONS ABOVE
        // MAIN BELOW
        
        // start the flow
        grab_data();
        */
       const random_boop = [
            'https://media1.tenor.com/images/cbf38a2e97a348a621207c967a77628a/tenor.gif?itemid=6287077',
            'https://media.tenor.com/images/9945480efe5179c227558769613ee275/tenor.gif',
            'https://i.gifer.com/AfDr.gif',
            'https://i.imgur.com/fZmUTgw.gif',
            'https://media.tenor.com/images/75c40413d2a4ec935b707ef32ab53321/tenor.gif',
            'https://66.media.tumblr.com/9a457a43bcae3ebaafda53d7fe6f572d/tumblr_pqjm6cCRt41th206io1_1280.gif',
            'https://thumbs.gfycat.com/PowerlessEqualDeviltasmanian-size_restricted.gif',
            'https://i.gifer.com/81H8.gif',
            'https://steamuserimages-a.akamaihd.net/ugc/169289604394170554/4CAB1E72D3FCD5527A1A6BB4443AF5E9EC65627F/',
            'https://media.tenor.com/images/d07762ab2f5fc5d1d43525d2b3db7de8/tenor.gif'
        ]
        if(message.mentions.members.size >= 1) {
            if(person.id == message.author.id) {
                message.channel.send('Eh? Why did you boop yourself?')
            }else {
                const embed = new Discord.MessageEmbed()
        
                .setAuthor(`${message.author.username} booped ${person.username}'s nose !`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(random_boop[Math.floor(Math.random() * random_boop.length)])
                .setColor(0x4AEFBA)
                message.channel.send(embed);
            }
        }else {
            message.channel.send('You have to ping someone to boop them')
        }

        
    }
}