import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5132,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // synchronize: true,
  // logging: true,
  // entities: [__dirname + '/**/*.entity{.js,.ts}'],
  // subscribers: [],
  // migrations: [],
})
