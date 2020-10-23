module.exports = {
    name:'muterole',
    description: "It creates the mute role",
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("MANAGE_ROLES")) {
            message.channel.send('You do not have permission to manage roles')
        }else if(message.member.hasPermission("MANAGE_ROLES")) {
            let newrole = message.guild.roles.create({
                data: {
                    name: 'BMuted',
                    color: 'RED',
                    permissions: [{CREATE_INVITE: false}, {SEND_MESSAGES: false}, {EMBED_LINKS: false}, {ATTACH_FILES: false}, {USE_EXTERNAL_EMOJIS: false}, {ADD_REACTIONS: false}]
                }
            })

            message.channel.send('Successfully created the muterole (Bmuted) ;3')
        }else return;
    }
}