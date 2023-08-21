import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Entity: 将Test装饰成一个实体类
@Entity()
export class Test {
  // PrimaryGeneratedColumn: 自增列
  @PrimaryGeneratedColumn()
  id: number;

  // Column： 定义列
  @Column()
  name: string;

  @Column()
  age: number;
}
