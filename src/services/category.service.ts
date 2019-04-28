import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './../entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) { }

  // 保存新分类
  async save(data: any): Promise<any> {
    return await this.categoryRepository.save(data);
  }

  // 查找所有分类
  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }
}
