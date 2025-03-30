
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({default:null})
  age:number;

  @Column({default:null})
  breed: string;

  @Column({ default: true })
  isActive: boolean;
}
