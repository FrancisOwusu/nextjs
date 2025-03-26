import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";
import { CatsModule } from "./cats/cats.module";
import { logger, LoggerMiddleware } from "./middleware/logger.middleware";

@Module({
  imports: [UsersModule, CatsModule],
  //   controllers:[CatsController],
  providers: [CatsService],
})
//export class AppModule {}//without middleware
export class AppModule implements NestModule {
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

