const {readdirSync} = require('fs');
const ascii = require('ascii-table');
const table = new ascii().setHeading('Command', 'Load status');

module.exports = (bot) => {
    readdirSync('./commands/').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}`).filter(f => f.endsWith('.js'));

        for(let file of commands){
            let pull = require(`./commands/${dir}/${file}`);

            if(pull.name){
                bot.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            }else {
                table.addRow(file, '❌ -> Missing something ?');
                continue;
            }

            if(pull.aliases && Array.isArray(pull))
            pull.aliases.forEach(alias => this.bot.aliases.set(alias, pull.name));
        }
    });
}