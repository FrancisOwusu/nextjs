"use strict";

// Define a generic repository interface
interface Repository<T> {
  findAll(filter?: any): Promise<T[]>;
  findById(id: number | string): Promise<T | null>;
  findOne(filter?: any): Promise<T | null>;
  bulkCreate(data: any[]): Promise<T[]>;
  save(data: any): Promise<T>;
  update(id: number | string, data: any): Promise<any>;
  delete(id: number | string, condition?: boolean): Promise<any>;
  model(): Promise<any>;
}

// Generic service factory function
export default function <T>(repository: Repository<T>) {
  return {
    findAll: async (filter?: any): Promise<T[]> => {
      try {
        return await repository.findAll(filter);
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
    
    findById: async (id: number | string): Promise<T | null> => {
      try {
        return repository.findById(id);
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
    
    findOne: async (filter?: any): Promise<T | null> => {
      try {
        return await repository.findOne(filter);
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
    
    bulkCreate: async (data: any[]): Promise<T[]> => {
      try {
        console.log(data);
        return await repository.bulkCreate(data);
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
    
    save: async (data: any): Promise<T> => {
      try {
        return await repository.save(data);
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
    
    update: async (id: number | string, data: any): Promise<any> => {
      try {
        return await repository.update(id, data);
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
    
    delete: async (id: number | string, condition?: boolean): Promise<any> => {
      try {
        return await repository.delete(id, condition);
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
    
    model: async (): Promise<any> => {
      try {
        // Note: There seems to be a variable 'model' referenced here but it's not defined
        // I've kept it as is, but this might be a bug in the original code
        return await repository.model(); // Changed to use repository.model() instead
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
  };
}