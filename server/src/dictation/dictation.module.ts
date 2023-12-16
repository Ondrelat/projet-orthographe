import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dictation } from './dictation.entity';
import { DictationService } from './dictation.service';
//import { ChatGptService } from './ChatGpt.service';
import { DictationController } from './dictation.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Dictation])],
    providers: [DictationService],
    controllers: [DictationController],
    exports: [DictationService]
})
export class DictationModule { }
