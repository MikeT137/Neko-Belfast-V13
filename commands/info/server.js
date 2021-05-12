const {prefix} = require('../../config.json')
module.exports = {
    name:'server',
    description: "It sends information about the server you do the command in",
    usage: `${prefix}server`,
    category: 'info',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const moment = require('moment');

        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;
        const regions = {
            brazil: 'Brazil',
            europe: 'Europe',
            hongkong: 'Hong Kong',
            india: 'India',
            japan: 'Japan',
            russia: 'Russia',
            singapore: 'Singapore',
            southafrica: 'South Africa',
            sydney: 'Sydney',
            'us-central': 'US Central',
            'us-east': 'US East',
            'us-west': 'US West',
            'us-south': 'US South'
        };

        const embed = new Discord.MessageEmbed()
            
            .setDescription(`**Information about this server**`)
            .setThumbnail(message.guild.iconURL({dynamic: true}))
            .addField('General', [
                `\`Name:\` ${message.guild.name}`,
                `\`ID:\` ${message.guild.id}`,
                `\`Owner:\` ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
                `\`Region:\` ${regions[message.guild.region]}`,
                `\`Boost Tier:\` ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}`: 'None'}`,
                `\`Time Created:\` ${moment(message.guild.createdTimestamp).format('LT')}; ${moment(message.guild.createdTimestamp).format('LL')}; ${moment(message.guild.createdTimestamp).fromNow()}`
            ])
            .addField('Statistics', [
                `\`Role Count:\` ${roles.length}`,
                `\`Emoji Count:\` ${emojis.size}`,
                `\`Member Count:\` ${message.guild.memberCount}`,
                `\`Text Channel Count:\` ${channels.filter(channel => channel.type === 'text').size}`,
                `\`Voice Channel Count:\` ${channels.filter(channel => channel.type === 'voice').size}`
            ])
            .setColor('#7d77df')
        message.channel.send(embed)
    }
}