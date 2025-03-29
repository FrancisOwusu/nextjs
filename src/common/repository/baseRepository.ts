"use strict";

// Define a generic type for the model
interface Model<T> {
  findAll(filter?: any): Promise<T[]>;
  findByPk(id: number | string): Promise<T | null>;
  findOne(filter?: any): Promise<T | null>;
  bulkCreate(data: any[]): Promise<T[]>;
  create(data: any): Promise<T>;
  update(data: any, options: any): Promise<[number, T[]]>;
  destroy(options: any): Promise<number>;
}

// Generic repository function with proper typing
export default function <T>(model: Model<T>) {
  return {
    findAll: async (filter?: any): Promise<T[]> => {
      try {
        return await model.findAll(filter);
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
    findById: async (id: number | string): Promise<T | null> => {
      try {
        return await model.findByPk(id);
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
    findOne: async (filter?: any): Promise<T | null> => {
      try {
        return await model.findOne(filter);
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
    bulkCreate: async (data: any[]): Promise<T[]> => {
      try {
        return await model.bulkCreate(data);
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
    save: async (data: any): Promise<T> => {
      try {
        return await model.create(data);
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
    update: async (id: number | string, data: any): Promise<[number, T[]]> => {
      try {
        return await model.update(data, {
          where: {
            id: id,
          },
        });
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
    delete: async (id: number | string, condition: boolean = true): Promise<number> => {
      try {
        return await model.destroy({
          where: {
            id: id,
          },
          truncate: condition,
        });
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
    model: async (): Promise<Model<T>> => {
      try {
        return await model;
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
      }
    },
  };
}