import { Controller, Get, Param } from '@nestjs/common';
import { HelperService } from './helper.service';
import { Helper } from './helper.entity';

@Controller('helper')
export class HelperController {
    constructor(private readonly helperService: HelperService) { }

    @Get(':word')
    findByWord(@Param('word') word: string) {
        return this.helperService.findByWord(word);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.helperService.findOne(id);
    }
}
