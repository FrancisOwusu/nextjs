
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Cat extends BaseEntity {
 
  @Column()
  name: string;

  @Column()
  age:number;

  @Column()
  breed: string;

  @Column({ default: true })
  isActive: boolean;
}
