import dotenv from "dotenv";
dotenv.config(); // ✅ Load .env variables early

import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(3, "10 s"), // 10 requests per 10 seconds
})

export default ratelimit