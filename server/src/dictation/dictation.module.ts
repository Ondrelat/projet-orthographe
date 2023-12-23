import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dictation } from './dictation.entity';
import { DictationService } from './dictation.service';
import { DictationController } from './dictation.controller';
import { HelperController } from './helper.controller';
import { HelperService } from './helper.service';
import { Helper } from './helper.entity'; // Importez votre HelperService
import { Word } from './word.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Dictation, Helper, Word])],
    providers: [DictationService, HelperService], // Ajoutez HelperService ici
    controllers: [DictationController, HelperController], // Assurez-vous que HelperController est inclus
    exports: [DictationService]
})
export class DictationModule { }