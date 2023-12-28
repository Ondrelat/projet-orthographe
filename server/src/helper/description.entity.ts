
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { Helper } from './helper.entity'; // Assurez-vous que le chemin est correct
import { Type } from './type.entity'; // Assurez-vous que le chemin est correct

@Entity('descriptions')
export class Description {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, nullable: true })
  title: string;

  @Column({ nullable: true })
  idHelper: number;

  @Column({ nullable: true })
  idType: number;

  @Column('text')
  text: string;

  @ManyToOne(() => Helper, helper => helper.descriptions, { onDelete: 'SET NULL' })
  helper: Helper;

  @ManyToOne(() => Type, type => type.descriptions, { onDelete: 'SET NULL' })
  type: Type;
}
