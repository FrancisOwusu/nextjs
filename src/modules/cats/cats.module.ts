import { Catch, Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from '../../database/entities/cat.entity';

//@Global()//make module global
@Module({ 
    imports:[TypeOrmModule.forFeature([Cat])],
    controllers:[CatsController],
    providers:[CatsService],
    exports:[CatsService,TypeOrmModule]
    })
export class CatsModule {}
