import { Controller, Get, Post, Param, Body, Put } from '@nestjs/common';
import { WordService } from '../services/word.service';

@Controller('api/word')
export class WordController {
  constructor(
    private wordService: WordService,
  ) { }

  @Get()
  getList(): any {
    return this.wordService.findAll();
  }

  @Post()
  save(@Body() params: any): any {
    console.log(params);
    return this.wordService.save(params);
  }

  @Put()
  update(@Body() params: any): any {
    console.log('更新单词', params);
    return this.wordService.update(params);
  }
}
