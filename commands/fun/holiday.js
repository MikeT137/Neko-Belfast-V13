const {prefix} = require('../../config.json')
module.exports = {
    name:'holiday',
    description: "When there is a holiday, the bot will send a gif about that holiday\nHolidays:\n\nNew Year - january 1st\nValentine\'s Day - february 14th\nEaster - april 8th\nHalloween - october 31st\nThanksgiving - november 25th\nChristmas - december 25th",
    usage: `${prefix}holiday`,
    category: 'fun',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');

        const random_newyear = [
            'https://i.gifer.com/2PHx.gif',
            'https://media.tenor.com/images/38d10b45aa8bdeefd8cde1d747381739/tenor.gif',
            'https://i.pinimg.com/originals/d5/12/f4/d512f444a90580f29f5394783fb03496.gif',
            'https://imgur.com/WYiSQQs',
            'https://data.whicdn.com/images/324594003/original.gif',
            'https://64.media.tumblr.com/20945f574b0dab5663a85c27b1de8620/tumblr_p1t2chSCHW1wexa8uo1_400.gifv',
            'https://media.tenor.com/images/fa9d8b375d26d0cff0314a93bd08013f/tenor.gif',
            'https://pa1.narvii.com/6330/392aef1b9f60b5b6dde6351dae7def9871c324f1_hq.gif',
            'https://img.wattpad.com/935d5c486f270b10b2c213dbb3858a170c77e695/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4938426338746a72555a647232673d3d2d3637343930343231332e313537356135613038316466613766643232343932363136333237322e676966?s=fit&w=720&h=720',
            'https://pa1.narvii.com/5599/2fe890c431fc6d2d22337bc21234a1f66365b23f_hq.gif'
        ]
        const random_valentine = [
            'https://imgur.com/vAcRVmu',
            'https://i.pinimg.com/originals/b2/00/b0/b200b095ceb6263efdff9d32466fb916.gif',
            'https://glasseschanneedsyou.files.wordpress.com/2015/02/anime-valentine.gif',
            'https://media1.tenor.com/images/6561bd819d036bc3c90d92d27c82cf7b/tenor.gif?itemid=5205817',
            'https://i.kym-cdn.com/photos/images/newsfeed/000/913/444/f3a.gif',
            'https://pa1.narvii.com/5643/3ae47c0781e5ef9196af1c2ac551eae923ce7430_hq.gif',
            'https://imgur.com/GTG0AXn',
            'https://imgur.com/V97MiuR',
            'https://cdn.lowgif.com/full/24240f6bc42382b3-crunchyroll-forum-valentines-day-is-coming.gif',
            'https://i.giphy.com/CaAQ3NZZWKb28.gif'
        ]
        const random_easter = [
            'https://steamuserimages-a.akamaihd.net/ugc/528418381444310685/12D9D83CADFF4368A6BE13704BE5BFA0D2C589E5/',
            'https://i.chzbgr.com/full/8526307584/hD3A71C19/not-the-bunny-girl-i-was-expecting',
            'https://data.whicdn.com/images/284442232/original.gif',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23ecd3bd-7845-4bd4-9839-38b546e7fe3d/db61xbj-d6ae393d-f6fa-4ae7-87d2-76d1fc1fcb8d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjNlY2QzYmQtNzg0NS00YmQ0LTk4MzktMzhiNTQ2ZTdmZTNkXC9kYjYxeGJqLWQ2YWUzOTNkLWY2ZmEtNGFlNy04N2QyLTc2ZDFmYzFmY2I4ZC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.TCP255aqbenfshGvV_y06pq3kbJj7dKqanS-V94ejXQ',
            'https://giffiles.alphacoders.com/489/48931.gif',
            'https://i.pinimg.com/originals/51/f2/82/51f2824a1a74123f56d0f5b04f033869.gif',
            'https://pa1.narvii.com/5693/5de5186c09606dcb26900aa10608c7004573e7b3_00.gif',
            'https://media.tenor.com/images/0c7ff2bc301d4ca418d53432cd0f8718/tenor.gif',
            'https://i.gifer.com/377K.gif',
            'https://steamuserimages-a.akamaihd.net/ugc/949597907470465353/5553875CC0E8416ABB6D9C1DCFF5BB538B478CDD/'
        ]
        const random_bday = [
            'https://media.tenor.com/images/852a1b5e39337565710f904fcb828fe1/tenor.gif',
            'https://gfycat.com/frayedgrimcolt-happy-birthday-sekaiichi-hatsukoi',
            'https://i.gifer.com/QAvI.gif',
            'https://i.pinimg.com/originals/34/34/c4/3434c4b692a5176c13079980e94dd6df.gif',
            'https://media1.tenor.com/images/fbc51b5f97aebf20cf021ff3522dce93/tenor.gif?itemid=12279714',
            'https://i.pinimg.com/originals/11/14/0e/11140ea1c87559b14c806e74e9220be3.gif',
            'https://i.pinimg.com/originals/3e/e0/14/3ee014f1ca84605dec4ad71591917285.gif',
            'https://78.media.tumblr.com/43993d79a980525ca3f85799c7f12279/tumblr_o1wl18brRw1r60zuio1_540.gif',
            'https://image.myanimelist.net/ui/FgSQXwnU0GElnZ3SNgHOiC7uQR-fY8O7r5ihQkAc9D6W2PQvfpXBaUMZksw6SU56Tcel2Jv4QEhRJyAtHaCSsUeq4FybJFPBSioBcRd0jLg'
        ]
        const random_halloween = [
            'https://media1.tenor.com/images/a8681310fe7105955afe13292e9a97b9/tenor.gif?itemid=15224642',
            'https://i.pinimg.com/originals/94/fd/30/94fd303d72c77ffacc1c1ab513e2ea1f.gif',
            'https://data.whicdn.com/images/206684486/original.gif',
            'https://giphy.com/gifs/funimation-halloween-xOaduTvhtOba8',
            'https://i.pinimg.com/originals/ac/b0/33/acb03357d5c8999f55abebe4f926a376.gif',
            'https://em.wattpad.com/0ef6371fd7a9a028533852abb921983347ef807e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6333656e6a5534684766573345773d3d2d3936393137343432372e313633663735396163663765383962383131303632343835373532352e676966?s=fit&w=720&h=720',
            'https://i.pinimg.com/originals/ee/d3/50/eed3500fad4e8a9e00b207d5d5f1d16f.gif',
            'https://31.media.tumblr.com/tumblr_ltuwxxOPjo1qa3u0no1_1280.gif',
            'https://64.media.tumblr.com/b67c576ce00d818d2c39f1cdf79c0070/tumblr_inline_ofkerdmVSF1s4hiq3_500.gifv',
            'https://i.pinimg.com/originals/af/fa/aa/affaaa1a8e2cc528abb8c751578a11eb.gif'
        ]
        const random_thanks = [
            'https://i.pinimg.com/originals/e8/59/4b/e8594bf52e2999422d95b5672e0482e7.gif',
            'https://giphy.com/gifs/spiritedaway-3oz8xB06mHyoGE7ZoQ',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2288deca-96d5-4f94-9bc2-a5ea3702d4d1/dbukjpw-0d09fc44-80ca-463e-99fd-073e60f0c889.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjI4OGRlY2EtOTZkNS00Zjk0LTliYzItYTVlYTM3MDJkNGQxXC9kYnVranB3LTBkMDlmYzQ0LTgwY2EtNDYzZS05OWZkLTA3M2U2MGYwYzg4OS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.cXhjkDT8nkKqYFCBjVAEGm9O6aEitzGKMit5hiP1YhE',
            'https://kd.realotakuheroes.com/wp-content/uploads/2013/11/magi-s2-morgiana-aladdin-alibaba-feasting.gif',
            'https://media1.tenor.com/images/93308fdbd96d5793f7fe3bc7b3a7fc61/tenor.gif?itemid=5465113',
            'https://imgur.com/AJZ2Q7u',
            'https://data.whicdn.com/images/286421719/original.gif',
            'https://i.pinimg.com/originals/61/4c/e9/614ce9fbbae27f0f58ba0d7cc0f7c620.gif',
            'https://thumbs.gfycat.com/ViciousAntiqueBackswimmer-small.gif',
            'https://i.gifer.com/CsgA.gif'
        ]
        const random_xmas = [
            'https://i.pinimg.com/originals/63/28/8e/63288ec10cedbb9146627535d2711a7a.gif',
            'https://media.tenor.com/images/24194337243823d4166a9b4e6b71b354/tenor.gif',
            'https://i.pinimg.com/originals/36/46/9f/36469f591978bb66a41950e45b2df5d1.gif',
            'https://i2.wp.com/drunkenanimeblog.com/wp-content/uploads/2018/12/anime-christmas.gif?fit=540%2C304&ssl=1',
            'https://i.pinimg.com/originals/1a/32/5b/1a325b67bfd612ee9ad886ddb35db767.gif',
            'https://thumbs.gfycat.com/AnotherMarriedCrocodile-small.gif',
            'https://i.pinimg.com/originals/7b/28/7d/7b287dcd4bd134b6dd1c9f5961b5808c.gif',
            'https://i2.wp.com/drunkenanimeblog.com/wp-content/uploads/2019/12/anime-christmas-3.gif?w=230&h=130&ssl=1',
            'https://cdn62.picsart.com/188752053001202.gif?to=min&r=640',
            'https://data.whicdn.com/images/264113355/original.gif'
        ]
        message.channel.send('S-sorry, but there is no holiday today nyaa~')
        /*message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`M-Myaster, it\'s my birthday today!`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_bday[Math.floor(Math.random() * random_bday.length)])
            .setColor('#7d77df')
        message.channel.send(embed)*/
        /*
        Holidays

        January 1st - Happy New Year everyone!!
        February 14th - Happy Valentine\'s Day!!
        April 8th - Happy Easter nya~!
        June 29th - M-Myaster, it\'s my birthday today!
        September 16th - It\'s Miku\'s birthday nya~!
        October 31st - Happy Halloween everyone!
        November 25th - Happy Thanksgiving! With this occasion I\'ll say: thanks for threating me well myaster~
        November 30th - It\'s Mono\'s birthday nya~!
        December 25th - Merry Xmas nya~!
        */
    }
}