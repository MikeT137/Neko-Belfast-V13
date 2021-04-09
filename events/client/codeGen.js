function codeGen(bot) {

    let randomcode = Math.floor(Math.random(111111111)*999999999)
    console.log(randomcode)

}setInterval(codeGen, 900000)

module.exports = { codeGen }