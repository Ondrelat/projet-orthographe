import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Helper } from './helper.entity';
import { Word } from './word.entity';
// Importez votre modèle de base de données et tout autre dépendance nécessaire

@Injectable()
export class HelperService {
    constructor(
        @InjectRepository(Helper)
        private helperRepository: Repository<Helper>,
        @InjectRepository(Word)
        private wordRepository: Repository<Word>, // Injectez le dépôt pour Word si nécessaire
    ) { }

    async findByWord(wordName: string): Promise<Helper[] | undefined> {
        // Trouvez d'abord l'entité Word correspondant au mot donné
        const word = await this.wordRepository.findOne({
            where: { name: wordName }
        });

        // Si le mot existe, trouvez tous les helpers associés
        if (word) {
            return this.helperRepository.find({
                where: { idWord: word.id }
            });
        }

        return undefined;
    }

    async findByWordWithMostVotes(wordName: string): Promise<Helper | undefined> {
        // Trouvez d'abord l'entité Word correspondant au mot donné
        const word = await this.wordRepository.findOne({ where: { name: wordName } });

        // Si le mot existe, utilisez createQueryBuilder pour trouver le helper avec le plus grand nombre de votes
        if (word) {
            return this.helperRepository.createQueryBuilder('helpers')
                .where('helpers.idWord = :idWord', { idWord: word.id })
                .orderBy('helpers.nombreVote', 'DESC')
                .getOne(); // Retourne le premier résultat
        }

        return undefined;
    }

    async findOne(id: number): Promise<Helper | undefined> {
        return this.helperRepository.findOne({
            where: { id },
            relations: ['word', 'dictation'], // Incluez les relations si nécessaire
        });
    }
}