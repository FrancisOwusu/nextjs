import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  RawBody,
  Redirect,
  Req,
} from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";
import { ForbiddenException } from "forbiddent.exception";

@Controller("cats")
export class CatsController {
  constructor(private catService: CatsService){}

  @Get()
  async findAll(): Promise<Cat[]>{
    try {
      return this.catService.findAll()
    } catch (error) {
      // throw new HttpException({
      //   status: HttpStatus.FORBIDDEN,
      //   error: 'This is a custom message',
      // }, HttpStatus.FORBIDDEN, {
      //   cause: error
      // });

      throw new ForbiddenException();
    }


    // return this.catService.findAll();
  }
  @Post()
  create(@Body() createUserDto: CreateCatDto): Promise<Cat> {
    return this.catService.create(createUserDto);
  }

 

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Cat> {
    return this.catService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.catService.remove(id);
  }











  /*async findAll(@Query("age") age: number, @Query("breed") breed: string) {
    return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }
    findAll(@Req() request: Request): string {
      return "This action returns all cats";
    }

  async findAll(): Promise<any[]> {
      return [];
    } */
  
 

  /*@Post()
  @HttpCode(204)
  @Header("Cache-Control", "no-store")
  @Redirect("https://nestjs.com", 301)
  async create(@Body() createCatDto: CreateCatDto) {
    return "This is action adds a new cat";
  }
*/
  //   create(): string {
  //     return "Create a post";
  //   }
  /*@Post()
  async create(@Body() createCatDto: CreateCatDto){
    return RawBody();
    return this.catService.create(createCatDto);
  }
  getDocs(@Query("version") version) {
    if (version && version === "5") {
      return { url: "https://docs.nestjs.com/v5/" };
    }
  }

  @Get(":id")
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action return a #${params.id} cat`;
  }
  @Get(":id")
  findByOne(@Param("id") id: any): string {
    console.log(id);
    return `This action return a #${id} cat`;
  }
    */
}
