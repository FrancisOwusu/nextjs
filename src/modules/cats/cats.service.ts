import { Injectable } from "@nestjs/common";
// import { Cat } from './interfaces/cat.interface';
import { InjectRepository } from "@nestjs/typeorm";
import { Cat } from "../../database/entities/cat.entity";
import { Repository } from "typeorm";
import { CreateCatDto } from "./dto/create-cat.dto";
import { UpdateCatDto } from "./dto/update-cat.dto";

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>
  ) {}
  findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }
  findOne(id: number): Promise<Cat | null> {
    return this.catRepository.findOneBy({ id });
  }
  create(createCatDto: CreateCatDto): Promise<Cat> {
    const cat = new Cat();
    cat.name = createCatDto.name;
    cat.age = createCatDto.age;
    cat.breed = createCatDto.breed;
    return this.catRepository.save(cat);
  }
  async update(id: number, updateCatDto: UpdateCatDto): Promise<Cat> {
    await this.catRepository.update(id, updateCatDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.catRepository.delete(id);
  }
  // private readonly cats: Cat[] = [];

  // create(cat: Cat) {
  //   this.cats.push(cat);
  // }

  // findAll(): Cat[] {
  //   return this.cats;
  // }
}
