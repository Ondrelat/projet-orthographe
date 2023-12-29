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
        @InjectRepository(HelperWord)
        private helperRepository: Repository<Helper>,
        @InjectRepository(Description)
        private descriptionRepository: Repository<Description>,
        // Vous pourriez avoir besoin d'injecter d'autres dépôts si nécessaire
    ) { }

    async findHelperByWordWithDescription(wordName: string): Promise<any> {
        const word = await this.wordRepository.findOne({ where: { name: wordName } });
    
        if (!word) return undefined;
    
        // Trouvez les HelperWord associés, puis les Helpers
        const helperWords = await this.helperWordRepository.find({ 
            where: { word: word },
            relations: {
                helper: {
                    descriptions: true,
                },
            },// Assurez-vous que cette relation est configurée dans HelperWord
        });

        return helperWords;
    }

       
    async findByWordWithMostVotes(wordName: string): Promise<any> {
        const word = await this.wordRepository.findOne({ where: { name: wordName } });
    
        if (!word) return undefined;
    
        // Trouvez les HelperWord associés, puis les Helpers
        const mostVoteHelper = await this.helperWordRepository.findOne({ 
            where: { word: word 
            },
            relations: {
                helper: {
                    descriptions: true,
                },
            },
            order: {
                helper: {
                    numberVote: "DESC",
                },
            },
            // Assurez-vous que cette relation est configurée dans HelperWord
        });

        return mostVoteHelper;
    }
}