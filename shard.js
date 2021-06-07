const { ShardingManager } = require("discord.js")

const shards = new ShardingManager("./index.js", {
    token: process.env.token, 
    totalShards: "auto"
})

shards.on("shardCreate", shard => {
    console.log(`Launched shard #${shard.id}`);
})

shards.spawn(shards.totalShards, 10000)