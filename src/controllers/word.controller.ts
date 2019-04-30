import { Controller, Get, Post, Body, Put, Query } from '@nestjs/common';
import { WordService } from '../services/word.service';
import { WordParams } from '../dto/wordParams.dto';

@Controller('api/word')
export class WordController {
  constructor(
    private wordService: WordService,
  ) { }

  @Get()
  async getList(@Query() query: WordParams): Promise<any> {
    const params = query ? query : {currentPage: 0, pageSize: 10};
    const data = await this.wordService.findAll(params)
    const result = {code: 200, data: data[0], currentPage: parseInt(query.currentPage), pageSize: parseInt(query.pageSize), total: data[1]}
    return result;
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
