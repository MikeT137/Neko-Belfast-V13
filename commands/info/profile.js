const {prefix} = require('../../config.json')
const fs = require('fs')
module.exports = {
    name:'profile',
    description: "It sends information about yourself, or the pinged user. The information is taken from the server you do the command in",
    usage: `${prefix}profile (no ping / ping)`,
    category: 'info',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        //let married = JSON.parse(fs.readFileSync('./marriage.json', 'utf8'))
        const moment = require('moment');
        const {version} = require('../../package.json');

        const person = message.mentions.members.first() || message.guild.members.cache.get(args) || message.member;
        const roles = person.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, -1);
        const flags = {
            DISCORD_EMPLOYEE: 'Discord Employee',
            DISCORD_PARTNER: 'Discord Partner',
            BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
            BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
            HYPESQUAD_EVENTS: 'HypeSquad Events',
            HOUSE_BRAVERY: 'House of Bravery',
            HOUSE_BRILLIANCE: 'House of Brilliance',
            HOUSE_BALANCE: 'House of Balance',
            EARLY_SUPPORTER: 'Early Supporter',
            TEAM_USER: 'Team User',
            SYSTEM: 'System',
            VERIFIED_BOT: 'Verified Bot',
            VERIFIED_DEVELOPER: 'Verified Bot Developer'
        };
        const userFlags = person.user.flags.toArray();
        const userFlags2 = message.author.flags.toArray();

        /*function findUser (userId, data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].hasOwnProperty(userId)) {
                    return data[i];
                }
            }
            return false;
        }
        let userIndex = findUser(message.author.id, married);
        let userIndex2 = findUser(person.id, married);

        let spouse;
        let spouse2;
        
        if (!userIndex) {
            spouse = 'Not married yet';
        }else {
            spouse = `<@${userIndex[message.author.id]}>`
        }
        
        if (!userIndex2) {
            spouse2 = 'Not married yet';
        }else {
            spouse2 = `<@${userIndex2[person.id]}>`
        }*/

        if(!args[0]) {
            const embed = new Discord.MessageEmbed()

                .setDescription(`**The information is taken from this server**`)
                .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                .addField('User', [
                    `\`Username:\` ${message.author.username}`,
                    `\`ID:\` ${message.author.id}`,
                    //`\`Married:\` ${spouse}`,
                    `\`Flags:\` ${userFlags2.length ? userFlags2.map(flag => flags[flag]).join(', ') : 'None'}`,
                    `\`Time Created:\` ${moment(message.author.createdTimestamp).format('LT')}; ${moment(message.author.createdTimestamp).format('LL')}; ${moment(message.author.createdTimestamp).fromNow()}`,
                    `\`Status:\` ${message.author.presence.status}`,
                    `\`Game Status:\` ${message.author.presence.game || 'Not playing a game'}`
                ])
                .addField(`Stats in ${message.guild.name}`, [
                    `\`Highest role:\` ${person.roles.highest.id === message.guild.id ? 'None' : person.roles.highest.name}`,
                    `\`Server join date:\` ${moment(message.author.joinedAt).format('LL\; LTS')}`,
                    `\`Roles:\` ${roles.length}`
                ])
                .setColor('#7d77df')
            message.channel.send(embed)
        }else if(args[0] && message.mentions.members.size == 1) {
            if(person.id === '727093236954431488') {
                const embed = new Discord.MessageEmbed()

                    .setThumbnail(bot.user.displayAvatarURL())
                    .setDescription('**Information about this bot**')
                    .addField('General', [
                        `\`Name:\` ${bot.user.tag} (${bot.user.id})`,
                        `\`Servers: \` ${bot.guilds.cache.size}`,
                        `\`Creation Date:\` ${moment(bot.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
                        `\`Version:\` ${version}.${bot.commands.size}`,
                        `\`Developer:\` [Miku](https://discord.bio/p/mikuyoruka)`,
                        `\`Profile picture artist:\` [ほしみやましろ。](https://www.pixiv.net/en/users/3580504)`
                    ])
                    .addField('Want to support me?', '➤[Invite me!](https://discord.com/oauth2/authorize?client_id=727093236954431488&scope=bot&permissions=2146958847) ➤[Join my server!](https://discord.gg/M3sNjT8vt9) ➤[Vote me!](https://top.gg/bot/727093236954431488/vote) ➤[Donate!](https://www.buymeacoffee.com/mikuyoruka)')
                    .setColor('#7d77df')
                message.channel.send(embed);
            }else {
                const embed = new Discord.MessageEmbed()

                    .setDescription(`**The information is taken from this server**`)
                    .setThumbnail(person.user.displayAvatarURL({dynamic: true}))
                    .addField('User', [
                        `\`Username:\` ${person.user.username}`,
                        `\`ID:\` ${person.id}`,
                        //`\`Married:\` ${spouse2}`,
                        `\`Flags:\` ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
                        `\`Time Created:\` ${moment(person.user.createdTimestamp).format('LT')}; ${moment(person.user.createdTimestamp).format('LL')}; ${moment(person.user.createdTimestamp).fromNow()}`,
                        `\`Status:\` ${person.user.presence.status}`,
                        `\`Game Status:\` ${person.user.presence.game || 'Not playing a game'}`
                    ])
                    .addField(`Stats in ${message.guild.name}`, [
                        `\`Highest role:\` ${person.roles.highest.id === message.guild.id ? 'None' : person.roles.highest.name}`,
                        `\`Server join date:\` ${moment(person.joinedAt).format('LL\; LTS')}`,
                        `\`Roles:\` ${roles.length}`
                    ])
                    .setColor('#7d77df')
                message.channel.send(embed)
            }
        }
    }
}