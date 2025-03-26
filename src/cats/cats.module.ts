import { Catch, Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

//@Global()//make module global
@Module({ 
    controllers:[CatsController],
    providers:[CatsService],
    exports:[CatsService]
    })
export class CatsModule {}
