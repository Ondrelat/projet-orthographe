import { Controller, Get, Param } from '@nestjs/common';
import { DictationService } from './dictation.service';
import { Dictation } from './dictation.entity';

@Controller('dictations')
export class DictationController {
    constructor(private readonly dictationService: DictationService) { }

    @Get()
    async findAll(): Promise<Dictation[]> {
        return this.dictationService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.dictationService.findOne(id);
    }

    @Get('randomDictation/:level')
    async getRandomDictation(@Param('level') level: number) {
        // Implémentez la logique pour obtenir une dictée aléatoire basée sur le niveau de difficulté
        return await this.dictationService.getRandomDictation(level);
    }
}
