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

  /**
   * 保存新单词
   * @param data 新单词
   */
  async save(data: any): Promise<any> {
    const word = await this.wordRepository.find({word: data.word});
    if (word.length) return new Promise((resolve, reject) => {reject('已经存在')})
    return await this.wordRepository.save(data);
  }

  /**
   * 更新单词
   * @param data 单词
   */
  async update(data: any): Promise<any> {
    return await this.wordRepository.update(data.id, data);
  }

  /**
   * 查找所有单词
   * @param params 查询参数
   */
  async findAll(params: any): Promise<[Word[], number]> {
    // const param: FindManyOptions<Word> = {skip: params.pageSize * params.currentPage, take: params.pageSize};
    return await this.wordRepository.createQueryBuilder('word')
                                    .orderBy('word.word', params.sort)
                                    .andWhere('word.word like :search', { search: `%${params.search || ''}%`})
                                    .skip(params.pageSize * params.currentPage)
                                    .take(params.pageSize)
                                    .getManyAndCount();
    // return await this.wordRepository.findAndCount(param);
  }

  /**
   * 删除单词
   * @param id 删除实例的id
   */
  async deleteWord(id: string | number): Promise<any> {
    return await this.wordRepository.delete(id)
  }
}
