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
                }
            })

            message.channel.send('Successfully created the muterole (Bmuted) ;3')
        }else return;
    }
}