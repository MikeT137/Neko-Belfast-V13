const { ShardingManager } = require("discord.js")

const manager = new ShardingManager("./index.js", {
    token: "NzI3MDkzMjM2OTU0NDMxNDg4.Xvm0WA.SKa92unlj_4RZvYAy2Tf6ZiwvJ8",
})

manager.on("shardCreate", shard => {
    console.log(`Launched shard #${shard.id}`);
})

manager.spawn(8, 30000).catch(error => console.log(`Oops, something went wrong:\n${error}`))
