module.exports = {
    name:'userinfo',
    description: "Shows you the information of that specific user",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const moment = require('moment');

        const member = message.mentions.members.first() || message.guild.members.cache.get(args) || message.member;
        const roles = member.roles.cache
        const roles2 = message.author.roles.cache
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
        const userFlags = member.user.flags.toArray();
        const userFlags2 = message.author.flags.toArray();

        if(!args[0]) {
            let embed = new Discord.MessageEmbed()

                .setDescription(`**Guild information for:** ${message.guild.name}`)
                .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                .addField('User', [
                    `**Username:** ${message.author.username}`,
                    `**ID:** ${message.author.id}`,
                    `**Flags:** ${userFlags2.length ? userFlags2.map(flag => flags[flag]).join(', ') : 'None'}`,
                    `**Time Created:** ${moment(message.author.createdTimestamp).format('LT')} ${moment(message.author.createdTimestamp).format('LL')} ${moment(message.author.createdTimestamp).fromNow()}`,
                    `**Status:** ${message.author.presence.status}`,
                    `**Game:** ${message.author.presence.game || 'Not Playing a game'}`
                ])
                .addField('Member', [
                    `**Highest role:** ${message.author.roles2.highest.id === message.guild.id ? 'None' : message.author.roles2.highest.name}`,
                    `**Server join date:** ${moment(message.author.joinedAt).format('LL LTS')}`,
                    `**Roles:** ${roles2.length}`
                ])
                .setColor(0x4AEFBA)
            message.channel.send(embed)
        }else if(args[0] == member) {
            let embed = new Discord.MessageEmbed()

                .setDescription(`**Guild information for:** ${message.guild.name}`)
                .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
                .addField('User', [
                    `**Username:** ${member.user.username}`,
                    `**ID:** ${member.id}`,
                    `**Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
                    `**Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
                    `**Status:** ${member.user.presence.status}`,
                    `**Game:** ${member.user.presence.game || 'Not Playing a game'}`
                ])
                .addField('Member', [
                    `**Highest role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
                    `**Server join date:** ${moment(member.joinedAt).format('LL LTS')}`,
                    `**Roles:** ${roles.length}`
                ])
                .setColor(0x4AEFBA)
            message.channel.send(embed)
        }else return;
    }
}