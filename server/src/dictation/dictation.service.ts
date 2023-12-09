import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dictation } from './dictation.entity';

@Injectable()
export class DictationService {
    constructor(
        @InjectRepository(Dictation)
        private dictationRepository: Repository<Dictation>,
    ) { }

    async findAll(): Promise<Dictation[]> {
        return this.dictationRepository.find();
    }

    findOne(id: number): Promise<Dictation | undefined> {
        return this.dictationRepository.findOneBy({ id });
    }


}
