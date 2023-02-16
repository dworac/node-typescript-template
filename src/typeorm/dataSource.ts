import { DataSource } from 'typeorm';
import fs from 'fs';
import User from './models/User';
import config from '../utils/config';

export default new DataSource({
	type: 'postgres',
	host: config.TYPEORM_HOST,
	port: config.TYPEORM_PORT,
	username: config.TYPEORM_USERNAME,
	password: config.TYPEORM_PASSWORD,
	database: config.TYPEORM_DATABASE,
	synchronize: true,
	logging: false,
	entities: [User],
	migrations: ['./migrations/**/*{.ts,.js}'],
	subscribers: [],
	ssl: {
		ca: fs.readFileSync('ca-certificate.crt').toString(),
	},
});
