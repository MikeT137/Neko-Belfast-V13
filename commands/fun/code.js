const {prefix} = require('../../config.json')
module.exports = {
    name: 'code',
    description: 'bruh',
    usage: `${prefix}code`,
    category: 'fun',
    run: async (bot, message, args) => {
        function codeGen(bot) {
            let randomcode = Math.floor(Math.random(111111111)*999999999)

            console.log(randomcode)
        }
        setInterval(codeGen, 900000)
            module.exports = { codeGen } 
    }
}