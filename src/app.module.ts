import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import {ConfigModule} from '@nestjs/config';
import { UsersModule } from "./modules/users/users.module";
import { CatsController } from "./modules/cats/cats.controller";
import { CatsService } from "./modules/cats/cats.service";
import { CatsModule } from "./modules/cats/cats.module";
import { logger, LoggerMiddleware } from "./middleware/logger.middleware";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { Cat } from "./database/entities/cat.entity";
import { User } from "./database/entities/user.entity";
const defaultOptions = {
  type: 'postgres',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'db',
  synchronize: true,
};


const defaultMysqlOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'nestjsapp',
  synchronize: true,
};





@Module({
  imports: [
    TypeOrmModule.forRoot({
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
    autoLoadEntities: true,
  }),
    UsersModule, CatsModule,ConfigModule.forRoot(  )],
    // controllers:[CatsController],
  providers: [CatsService],
})
//export class AppModule {}//without middleware
export class AppModule implements NestModule {
  constructor(private dataSource:DataSource){

  }
  configure(consumer: MiddlewareConsumer) {
    
    consumer
    // .apply(LoggerMiddleware)//class middle
    .apply(logger)//functional middle

    // .apply(cors(), helmet(), logger)//multiple middlewares

    .exclude(
      { path: 'cats', method: RequestMethod.GET },
      { path: 'cats', method: RequestMethod.POST },
      'cats/{*splat}',
    )
    .forRoutes("cats", CatsController);

    /*forRoutes({
  path: 'abcd/*splat',
  method: RequestMethod.ALL,
});
*/
    // throw new Error("Method not implemented.");
  }
}

function cors(): Function | import("@nestjs/common").Type<any> {
  throw new Error("Function not implemented.");
}

function helmet(): Function | import("@nestjs/common").Type<any> {
  throw new Error("Function not implemented.");
}
/*function cors(): Function | import("@nestjs/common").Type<any> {
  throw new Error("Function not implemented.");
}

function helmet(): Function | import("@nestjs/common").Type<any> {
  throw new Error("Function not implemented.");
}

function exclude(arg0: { path: string; method: RequestMethod; }, arg1: { path: string; method: RequestMethod; }, arg2: string) {
  throw new Error("Function not implemented.");
}
  */

