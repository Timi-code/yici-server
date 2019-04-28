import { Category } from './../entities/category.entity';
import { Controller, Post, Get, Body } from '@nestjs/common';
import { CategoryService } from './../services/category.service';

@Controller('api/category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
  ) { }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Post()
  save(@Body() data: any): Promise<any> {
    // console.log(data);
    return this.categoryService.save(data);
  }
}
