module.exports = {
    name:'pat',
    description: "Pats a user",
    execute(message, argument){
        let member = message.mentions.members.first()

        if(argument[2] == `${member}`){
            message.channel.send(`${message.author} gave ${member} a pat!`);
            message.channel.send(`https://media.giphy.com/media/osYdfUptPqV0s/giphy.gif`);
        }
    }
}