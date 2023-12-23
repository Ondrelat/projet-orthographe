import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Helper } from './helper.entity'; // Assurez-vous d'avoir une entité Helper correspondante

@Entity('Words')
export class Word {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    name: string;

    @Column({ length: 45, nullable: true })
    type: string;

    @OneToMany(() => Helper, helper => helper.word)
    helpers: Helper[];
}