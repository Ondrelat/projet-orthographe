import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { HelperService } from './helper.service';
import { Helper } from './helper.entity';
import { Word } from './word.entity';

@Controller('helper')
export class HelperController {
    constructor(private readonly helperService: HelperService) { }

    @Get('/word/:word')
    findByWord(@Param('word') word: string) {
        return this.helperService.findByWord(word);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.helperService.findOne(id);
    }

    // Un point de terminaison pour obtenir le helper avec le plus de votes pour un mot donné
    @Get('/word/:word/most-votes')
    async getHelperWithMostVotes(@Param('word') word: string) {
        const helper = await this.helperService.findByWordWithMostVotes(word);
        if (!helper) {
            throw new NotFoundException(`Helper with most votes for word "${word}" not found.`);
        }
        return helper;
    }
}
