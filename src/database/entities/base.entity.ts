import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity{
    // @PrimaryGeneratedColumn('uuid')
    // id!: string;

     @PrimaryGeneratedColumn()
      id!: number| string;
    
  
    @CreateDateColumn()// ✅ Change from "timestamptz"
    readonly createdAt!: Date;
  
    @UpdateDateColumn()
    readonly updatedAt!: Date;
  
    @DeleteDateColumn()
    deletedAt!: Date;
}