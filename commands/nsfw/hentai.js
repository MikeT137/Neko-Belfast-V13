const {prefix} = require('../../config.json')
const {topggtoken} = require('../../config.json')
module.exports = {
    name:'hentai',
    description: "It sends a nsfw gif about hentai",
    usage: `${prefix}hentai`,
    category: 'nsfw',
    run: async (bot, message, args) => {
        if(message.channel.nsfw) {
            const Discord = require('discord.js')
            const nekoclient = require('nekos.life');
            const neko = new nekoclient()
            const Topgg = require('@top-gg/sdk')
            const topgg = new Topgg.Api(topggtoken)

            let voted = await topgg.hasVoted(message.author.id)
            if(!voted) {
                message.channel.send(`If you want to access nsfw commands, you have to vote for me once every 12 hours. That\'s the only way that it can work nya~.\nHere\'s the link: https://top.gg/bot/727093236954431488/vote`)
             }else {
                async function hentai() {
                    const anal = await neko.nsfw.anal()
                    const bj = await neko.nsfw.bJ()
                    const boob = await neko.nsfw.boobs()
                    const boob2 = await neko.nsfw.tits()
                    const art = await neko.nsfw.cumArts()
                    const sluts = await neko.nsfw.cumsluts()
                    const feet = await neko.nsfw.feet()
                    const feet2 = await neko.nsfw.feetGif()
                    const femdom = await neko.nsfw.femdom()
                    const futa = await neko.nsfw.futanari()
                    const solo = await neko.nsfw.girlSolo()
                    const solo2 = await neko.nsfw.girlSoloGif()
                    const image = await neko.nsfw.hentai()
                    const gif = await neko.nsfw.randomHentaiGif()
                    const keta = await neko.nsfw.keta()
                    const kitsune = await neko.nsfw.kitsune()
                    const kuni = await neko.nsfw.kuni()
                    const nekouwu = await neko.nsfw.neko()
                    const nekouwu2 = await neko.nsfw.nekoGif()
                    const pussy = await neko.nsfw.pussy()
                    const pussy2 = await neko.nsfw.pussyArt()
                    const pussy3 = await neko.nsfw.pussyWankGif()
                    const spank = await neko.nsfw.spank()
                    const trap = await neko.nsfw.trap()
                    const yuri = await neko.nsfw.yuri()
                    const yuri2 = await neko.nsfw.lesbian()

                    let random_hentai = [
                        anal,
                        bj,
                        boob,
                        boob2,
                        art,
                        sluts,
                        feet,
                        feet2,
                        femdom,
                        futa,
                        solo,
                        solo2,
                        image,
                        gif,
                        keta,
                        kitsune,
                        kuni,
                        nekouwu,
                        nekouwu2,
                        pussy,
                        pussy2,
                        pussy3,
                        spank,
                        trap,
                        yuri,
                        yuri2
                    ]
                    const GIF = random_hentai[Math.floor(Math.random() * random_hentai.length)]
                    const embed = new Discord.MessageEmbed()
                            
                        .setTitle(`A nsfw image/gif about: \`hentai\``)
                        .setImage(GIF.url)
                        .setFooter('Image/Gif taken from nekos.life', 'https://avatars.githubusercontent.com/u/34457007?s=200&v=4')
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }
                hentai();
            }
        }else {
            message.channel.send(`${message.author.username} what are you doing?! This is not a nsfw channel nyaa!`)
        }
    }
}