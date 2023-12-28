import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { HelperWord } from './helperword.entity'; // Assurez-vous que le chemin est correct

@Entity('Words')
export class Word {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    name: string;

    @OneToMany(() => HelperWord, helperswords => helperswords.word)
    helperswords: HelperWord[];
}