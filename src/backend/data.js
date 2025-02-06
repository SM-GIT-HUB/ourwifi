"use server"

import Redis from "ioredis"

const redis = new Redis(process.env.UPSTASH_REDIS_URL);
// await redis.set('fo', 'bar');
// await redis.get("fo");

async function getDatas()
{
    try {
        let [names, ips, macs] = await Promise.all([
            redis.get("names"),
            redis.get("ips"),
            redis.get("macs")
        ])

        names = JSON.parse(names);
        ips = JSON.parse(ips);
        macs = JSON.parse(macs);

        return { success: true, names, ips, macs };
    }
    catch(err) {
        return { success: false };
    }
}


export { getDatas }