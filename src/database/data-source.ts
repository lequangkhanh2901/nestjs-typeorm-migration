import Post from './entity/post.entity';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Post1684725009732 } from './migration/1684725009732-Post';
import Categoty from './entity/category.entity';
import { Catrgoty1684729314596 } from './migration/1684729314596-Catrgoty';

config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [Post, Categoty],
  subscribers: [],
  migrations: [Post1684725009732, Catrgoty1684729314596],
});
