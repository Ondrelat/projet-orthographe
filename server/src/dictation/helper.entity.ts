import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Helpers')
export class Helper {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    word: string;

    @Column('text')
    type: string;

    @Column('text')
    rule: string;
}