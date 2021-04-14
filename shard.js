const { ShardingManager } = require("discord.js")

const shards = new ShardingManager("./index.js", {
    totalShards: "auto"
})

shards.on("shardCreate", shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`);
})

shards.spawn(shards.totalShards, 15000)