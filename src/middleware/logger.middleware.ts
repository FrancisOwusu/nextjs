
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

//class base middleware
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}

//Functional middleware#

// import { Request,Response,NextFunction } from 'express';
export function logger(req: Request,res: Response,next: NextFunction){
   console.log(`Request...`);
   next()
}