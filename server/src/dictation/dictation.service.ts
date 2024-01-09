import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dictation } from './dictation.entity';

@Injectable()
export class DictationService {
    constructor(
        @InjectRepository(Dictation)
        private dictationRepository: Repository<Dictation>,
    ) { }

    async findAll(): Promise<Dictation[]> {
        return this.dictationRepository.find();
    }

    findOne(id: number): Promise<Dictation | undefined> {
        return this.dictationRepository.findOneBy({ id });
    }

    async create(dictationData: Dictation): Promise<Dictation> {
        const dictation = this.dictationRepository.create(dictationData);
        return this.dictationRepository.save(dictation);
    }

    async getRandomDictation(difficultyLevel: number): Promise<Dictation> {
        // Récupération du nombre total de dictées pour le niveau de difficulté donné
        const count = await this.dictationRepository.count({
            where: { level: difficultyLevel },
        });

        // Sélection aléatoire d'une dictée
        const randomIndex = Math.floor(Math.random() * count);
        const [randomDictation] = await this.dictationRepository.find({
            where: { level: difficultyLevel },
            skip: randomIndex,
            take: 1,
        });

        return randomDictation;
    }


}
