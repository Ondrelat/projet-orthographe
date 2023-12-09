import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}