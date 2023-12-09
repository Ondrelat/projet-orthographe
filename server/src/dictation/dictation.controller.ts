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
}
