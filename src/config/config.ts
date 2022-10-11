import * as dotenv from "dotenv";
dotenv.config();

export default {
    port: process.env.PORT,
    mysql: {
        connection: {
            prod: {
                host: process.env.DATABASE_HOST,
                port: process.env.DATABASE_PORT,
                database: process.env.DATABASE_NAME,
                user: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                debug: process.env.DATABASE_DEBUG ? ['ComQueryPacket'] : false
            },
            dev: {
                host: process.env.DATABASE_HOST,
                port: process.env.DATABASE_PORT,
                database: process.env.DATABASE_NAME,
                user: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                debug: process.env.DATABASE_DEBUG ? ['ComQueryPacket'] : false
            },
            test: {
                host: process.env.TEST_DATABASE_HOST,
                port: process.env.TEST_DATABASE_PORT,
                database: process.env.TEST_DATABASE_NAME,
                user: process.env.TEST_DATABASE_USERNAME,
                password: process.env.TEST_DATABASE_PASSWORD,
                debug: process.env.TEST_DATABASE_DEBUG ? ['ComQueryPacket'] : false
            }
        },
        pool: {
            min: (process.env.DATABASE_POOL_MIN) ? parseInt(process.env.DATABASE_POOL_MIN, 10) : 2,
            max: (process.env.DATABASE_POOL_MAX) ? parseInt(process.env.DATABASE_POOL_MAX, 10) : 2
        }
    }
}