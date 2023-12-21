import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Helper } from './helper.entity';
// Importez votre modèle de base de données et tout autre dépendance nécessaire

@Injectable()
export class HelperService {
    constructor(
        @InjectRepository(Helper)
        private helperRepository: Repository<Helper>,
    ) { }

    async findByWord(word: string): Promise<{ rule: string } | undefined> {
        const result = await this.helperRepository.findOne({ where: { word } });
        return result ? { rule: result.rule } : undefined;
    }

    findOne(id: number): Promise<Helper | undefined> {
        return this.helperRepository.findOneBy({ id });
    }
}