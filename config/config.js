module.exports = {
  MONGO_IP: process.env.MONGO_IP || "mongo", // this can be used with other hosting servers as AWS
  MONGO_PORT: process.env.MONGO_PORT || 27017,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  REDIS_URL: process.env.REDIS_URL || "redis",
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  SESSION_SECRET: process.env.SESSION_SECRET
}
// put what not here into docker-compose!