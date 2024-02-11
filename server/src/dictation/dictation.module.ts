import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dictation } from './dictation.entity';
import { DictationService } from './dictation.service';
import { DictationController } from './dictation.controller';
import { HelperController } from '../helper/helper.controller';
import { HelperService } from '../helper/helper.service';
import { Helper } from '../helper/helper.entity'; // Importez votre HelperService
import { Word } from '../helper/word.entity';
import { HelperWord } from '../helper/helperword.entity';
import { Type } from '../helper/type.entity';
import { Description } from '../helper/description.entity';
import { PollyService } from './polly.service';

@Module({
    imports: [TypeOrmModule.forFeature([Dictation, HelperWord, Helper, Word, Type, Description])],
    providers: [DictationService, HelperService, PollyService], // Ajoutez HelperService ici
    controllers: [DictationController, HelperController], // Assurez-vous que HelperController est inclus
    exports: [DictationService]
})
export class DictationModule { }