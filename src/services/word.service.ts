import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Word } from './../entities/word.entity';

@Injectable()
export class WordService {
  constructor(
    @InjectRepository(Word)
    private readonly wordRepository: Repository<Word>,
  ) { }

  // 保存新单词
  async save(data: any): Promise<any> {
    return await this.wordRepository.save(data);
  }

  // 更新单词
  async update(data: any): Promise<any> {
    return await this.wordRepository.update(data.id, data);
  }

  // 查找所有单词
  async findAll(): Promise<Word[]> {
    return await this.wordRepository.find();
  }
}
