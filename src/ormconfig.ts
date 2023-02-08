import { ConnectionOptions } from 'typeorm';

const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'kossilediacre',
  entities: [__dirname + '/**/*.entity{.ts,js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  synchronize: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default ormconfig;
