import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from 'typeorm';
import { Helper } from './helper.entity';

@Entity('Dictations')
export class Dictation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    text: string;

    @Column()
    level: number;

    @Column({ nullable: true })
    audioURL: string;

    @Column({ nullable: true })
    audioName: string;

    // La relation avec les 'Helpers', si un 'Helper' peut être associé à une dictée
    @OneToMany(() => Helper, (helper) => helper.dictation)
    helpers: Helper[];
}