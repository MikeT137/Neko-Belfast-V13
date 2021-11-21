const { ShardingManager } = require("discord.js")

const shards = new ShardingManager("./index.js", {
    token: "NzI3MDkzMjM2OTU0NDMxNDg4.Xvm0WA.SKa92unlj_4RZvYAy2Tf6ZiwvJ8", 
    totalShards: "auto"
})

shards.on("shardCreate", shard => {
    console.log(`Launched shard #${shard.id}`);
}).catch(error => console.log(`Oops, something went wrong:\n${error}`))

shards.spawn().catch(error => console.log(`Oops, something went wrong:\n${error}`))
