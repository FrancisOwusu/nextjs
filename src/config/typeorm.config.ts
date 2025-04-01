// import { DataSource } from 'typeorm';
// import { ConfigService } from '@nestjs/config';
// import { config } from 'dotenv';
// config();

// const configService = new ConfigService();


// const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: configService.get<string>('DATABASE_HOST'),
//   port: parseInt(configService.get<string>('DATABASE_PORT'), 5432),
//   username: configService.get<string>('DATABASE_USER'),
//   password: configService.get<string>('DATABASE_PASSWORD'),
//   database: configService.get<string>('DATABASE_NAME'),
//   synchronize: false,
//   entities: ['**/*.entity.ts'],
//   migrations: ['src/database/migrations/*-migration.ts'],
//   migrationsRun: false,
//   logging: true,
// });

// export default AppDataSource;
import { DataSource } from 'typeorm';

import * as dotenv from 'dotenv';
import { User } from 'src/database/entities/user.entity';
import { Cat } from 'src/database/entities/cat.entity';

dotenv.config();

export const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: process.env.DATABASE_HOST || 'localhost',
//   port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
//   username: process.env.DATABASE_USER || 'postgres',
//   password: process.env.DATABASE_PASSWORD || 'password',
//   database: process.env.DATABASE_NAME || 'mydb',
//   entities: [User,Cat],
//   migrations: ['src/database/migrations/*.ts'],
//   synchronize: false,
//   migrationsRun: true,




  
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjsapp',
      entities: [Cat,User],
      synchronize: true,
  
  
  
  
      // type: 'postgres',
      // host: process.env.DATABASE_HOST,
      // port: parseInt(process.env.DATABASE_PORT, 5432),
      // username: process.env.DATABASE_USER,
      // password: process.env.DATABASE_PASSWORD,
      // database: process.env.DATABASE_NAME,
      // synchronize: false,
      // entities: [__dirname + '/database/core/**/*.entity{.ts,.js}'],
    //   autoLoadEntities: true,
    
});