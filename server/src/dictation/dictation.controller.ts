import { Controller, Get, Post, Res, Param, HttpStatus, Body } from '@nestjs/common';
import { DictationService } from './dictation.service';
import { Dictation } from './dictation.entity';
import { PollyService } from './polly.service';
import { Response } from 'express'

@Controller('dictations')
export class DictationController {
    constructor(private readonly dictationService: DictationService, private readonly pollyService: PollyService) { }


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
        return await this.dictationService.getRandomDictation(level);
    }

    @Post('createDictation')
    async postCreateDictation(
        @Body('title') title: string,
        @Body('text') text: string,
        @Body('level') level: number, @Res() res: Response) {
        try {
            const audioStream = await this.pollyService.synthesizeSpeech(text);
            const fileName = `${title.replace(/ /g, '_')}_${Date.now()}.mp3`; // Nom de fichier personnalisé
            const filePath = await this.pollyService.saveAudioFile(audioStream, fileName);

            // Optionnel : renvoyer le chemin du fichier en réponse
            res.json({ filePath });
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }
}
