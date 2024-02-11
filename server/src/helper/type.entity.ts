import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Description } from './description.entity';

@Entity('types')
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  idHelper: number;
  
  @OneToMany(() => Description, description => description.type)
  descriptions: Description[];
}