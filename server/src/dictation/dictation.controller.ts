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
            const audiosUrl = "audios\\" + title;

            const dictationData = {
                id: null,
                title: title,
                text: text,
                level: level,
                audioName: title,
                audioURL: audiosUrl
            };

            const savedDictation = await this.dictationService.create(dictationData);

            const regex = /[^.!?;,:]+(?:\.{3}|[.!?;,:])/g;
            const phrases = text.match(regex);
            const filePaths = await Promise.all(phrases.map(async (phrase, index) => {
                const audioStream = await this.pollyService.synthesizeSpeech(phrase);
                const fileName = `${title.replace(/ /g, '_')}_partie_${index + 1}.mp3`; // Nom de fichier avec index
                return await this.pollyService.saveAudioFile(audioStream, fileName, title);
            }));

            // Renvoyer les chemins de tous les fichiers audio
            res.json({ filePaths });
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }
}
