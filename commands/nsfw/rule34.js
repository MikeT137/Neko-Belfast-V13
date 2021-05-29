const {prefix} = require('../../config.json')
const {topggtoken} = require('../../config.json')
module.exports = {
    name:'rule34',
    description: "It sends a nsfw image of anything you want. Although keep in mind that you can only use underscore instead of space, and when you use characters instead of normal tags, you also need to say the franchise they\'re from. Example: b.rule34 belfast_(azur_lane)",
    usage: `${prefix}rule34 some_tag / b.rule34 character(franchise_title)`,
    category: 'nsfw',
    run: async (bot, message, args) => {
        if(message.channel.nsfw) {
            const Discord = require('discord.js')
            const Topgg = require('@top-gg/sdk')
            const topgg = new Topgg.Api(topggtoken)
            const https = require("https");
            const xml2js = require('xml2js');

            if(!args[0]) {
                message.channel.send('You need to tell me what you want the rule34 of.')
            }else {
                let voted = await topgg.hasVoted(message.author.id)
                if(!voted) {
                    message.channel.send(`If you want to access nsfw commands, you have to vote for me once every 12 hours. That\'s the only way that it can work nya~.\nHere\'s the link: https://top.gg/bot/727093236954431488/vote`)
                }else {
                    var url = 'https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=' + `${args[0]}`;
 
                    https.get(url, function(res){
                        var body = '';
    
                        res.on('data', function(chunk){
                            body += chunk;
                        });
    
                        res.on('end', function(){
                            var parser = new xml2js.Parser();
                            parser.parseString(body, function (err, result) {
                                var postCount = result.posts.$.count - 1;
                                if(postCount > 100) {
                                    postCount = 100;
                                }
                                if(postCount > 0) {
                                    var picNum = Math.floor(Math.random() * postCount) + 0;
                                    var r34Pic = result.posts.post[picNum].$.file_url;
                                    const embed = new Discord.MessageEmbed()

                                        .setTitle(`Rule34 of: \`${args}\``)
                                        .setImage(r34Pic)
                                        .setFooter('Image taken from rule34.xxx', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3861ce61-8c45-473a-a082-1b1a6c1b7b39/d4wgqwr-2a8fc00c-5e7c-403c-a153-6ae2c682e34b.png/v1/fill/w_1024,h_436,strp/rule_34_logo_by_iloveportalz0r_d4wgqwr-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDM2IiwicGF0aCI6IlwvZlwvMzg2MWNlNjEtOGM0NS00NzNhLWEwODItMWIxYTZjMWI3YjM5XC9kNHdncXdyLTJhOGZjMDBjLTVlN2MtNDAzYy1hMTUzLTZhZTJjNjgyZTM0Yi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zSjNi10zwlQOry9sm5PA3DUzQXoKDvQ6qSuDt_Gm7s4')
                                        .setColor('#7d77df')
                                    message.channel.send(embed);
                                }else {
                                    message.channel.send("I couldn\'t find anything nya~! Either because the thing you searched isn\'t accurate enough, or i couldn\'t find any images.");
                                }
                            })
                        })
                    })
                }
            }
        }else {
            message.channel.send(`${message.author.username} what are you doing?! This is not a nsfw channel nyaa!`)
        }
    }
}