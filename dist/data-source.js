"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5132,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // synchronize: true,
    // logging: true,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    // subscribers: [],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});
