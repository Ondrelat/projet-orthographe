import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { Dictation } from './dictation.entity';
import { Word } from './word.entity';

@Entity('Helpers')
export class Helper {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    idWord: number;

    @Column({ nullable: true })
    idDictation: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    typeHelper: string; // Assuming this is a string, adjust the type accordingly

    @Column()
    nombreVote: number;

    // Assuming that Helper has a many-to-one relationship with Word
    @ManyToOne(() => Word, (word) => word.helpers)
    @JoinColumn({ name: 'idWord' }) // This matches the column name in the database
    word: Word;

    // Assuming that Helper has a many-to-one relationship with Dictation
    @ManyToOne(() => Dictation, (dictation) => dictation.helpers)
    @JoinColumn({ name: 'idDictation' }) // This matches the column name in the database
    dictation: Dictation;
}