import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Helper } from './helper.entity';
import { Word } from './word.entity';
import { Description } from './description.entity';
import { HelperWord } from './HelperWord.entity'; // Importez l'entité Description

// Importez votre modèle de base de données et tout autre dépendance nécessaire

@Injectable()
export class HelperService {

    constructor(
        @InjectRepository(Word)
        private wordRepository: Repository<Word>,
        @InjectRepository(HelperWord)
        private helperWordRepository: Repository<HelperWord>,
        @InjectRepository(Description)
        private descriptionRepository: Repository<Description>,
        // Vous pourriez avoir besoin d'injecter d'autres dépôts si nécessaire
    ) { }

    async findHelperAndDescriptionsByWord(wordName: string): Promise<any> {
        const word = await this.wordRepository.findOne({ where: { name: wordName } });
    
        if (!word) return undefined;
    
        // Trouvez les HelperWord associés, puis les Helpers
        const helperWords = await this.helperWordRepository.find({ 
            where: { word: word },
            relations: ['helper'] // Assurez-vous que cette relation est configurée dans HelperWord
        });
    
        // Préparer un tableau pour stocker les helpers avec leurs descriptions
        const helpersWithDescriptions = [];
    
        for (const hw of helperWords) {
            const helper = hw.helper;
    
            // Récupérer les descriptions pour le helper actuel
            const descriptions = await this.descriptionRepository.find({
                where: { idHelper: helper.id }
            });
    
            // Ajouter le helper et ses descriptions dans le tableau
            helpersWithDescriptions.push({ helper, descriptions });
        }
    
        return helpersWithDescriptions;
    }

       /* 
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
    }*/
}