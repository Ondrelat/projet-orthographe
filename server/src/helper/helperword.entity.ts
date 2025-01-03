import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Helper } from './helper.entity'; // Assurez-vous que le chemin est correct
import { Word } from './word.entity'; // Assurez-vous que le chemin est correct

@Entity('helperswords')
export class HelperWord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  wordId: number;

  @Column()
  helperId: number;

  @ManyToOne(() => Word, word => word.helperswords)
  @JoinColumn({ name: 'wordId' }) // Assurez-vous que cette colonne correspond à la clé étrangère
  word: Word;

  @ManyToOne(() => Helper, helper => helper.helperswords)
  @JoinColumn({ name: 'helperId' }) // Assurez-vous que cette colonne correspond à la clé étrangère
  helper: Helper;
}