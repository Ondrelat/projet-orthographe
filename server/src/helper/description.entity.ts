
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
  helperId: number;

  @Column({ nullable: true })
  typeId: number;

  @Column('text')
  text: string;

  @ManyToOne(() => Helper, helper => helper.descriptions, { onDelete: 'SET NULL' })
  helper: Helper;

  @ManyToOne(() => Type, type => type.descriptions, { onDelete: 'SET NULL' })
  type: Type;
}
