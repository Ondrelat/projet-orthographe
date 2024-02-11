import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { HelperWord } from './helperword.entity'; // Assurez-vous que le chemin est correct
import { Description } from './description.entity'; // Assurez-vous que le chemin est correct

@Entity('helpers')
export class Helper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, nullable: true })
  title: string;

  @Column({ length: 45, nullable: true })
  generateType: string;

  @Column({ nullable: true })
  numberVote: number;

  @OneToMany(() => Description, description => description.helper)
  descriptions: Description[];

  @OneToMany(() => HelperWord, helperswords => helperswords.helper)
  helperswords: HelperWord[];
}
