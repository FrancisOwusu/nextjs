import { Repository, EntityTarget, DataSource } from "typeorm";


export class BaseRepository<T> extends Repository<T> {
  constructor(entity: EntityTarget<T>, dataSource: DataSource) {
    super(entity, dataSource.createEntityManager());
  }

  async findAll(): Promise<T[]> {
    return this.find();
  }

  async findOneById(id: number): Promise<T | null> {
    return this.findOneBy({ id } as any);
  }

//   async createAndSave(entityData: Partial<T>): Promise<T> {
//     const entity = this.create(entityData);
//     return this.save(entity);
//   }
  

//   async updateEntity(id: number, updateData: Partial<T>): Promise<T | null> {
//     await this.update(id, updateData);
//     return this.findOneById(id);
//   }

  async removeEntity(id: number): Promise<void> {
    await this.delete(id);
  }
}
