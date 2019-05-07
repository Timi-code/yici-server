import { Controller, Get, Post, Body, Put, Query, Delete, Param, Res, HttpStatus } from '@nestjs/common';
import { WordService } from '../services/word.service';
import { ListDto } from '../dto/index';
import { Response, response } from 'express';

@Controller('api/word')
export class WordController {
  constructor(
    private wordService: WordService,
  ) { }

  @Get()
  async getList(@Query() query: any): Promise<any> {
    const params = {
      currentPage: parseInt(query.currentPage),
      pageSize: parseInt(query.pageSize),
      search: query.search
    };
    if (query.sort) {
      params['sort'] = query.sort;
    }
    const data = await this.wordService.findAll(params)
    const result = { code: 200, data: data[0], currentPage: params.currentPage, pageSize: params.pageSize, total: data[1] }
    return result;
  }

  @Post()
  save(@Body() params: any, @Res() res: Response): any {
    this.wordService.save(params)
      .then(data => {
        res.status(HttpStatus.CREATED).send({code: 200, data: data})
      })
      .catch(err => {
        res.status(HttpStatus.FORBIDDEN).send({code: 403, data: err})
      })
  }

  @Put()
  update(@Body() params: any): any {
    return this.wordService.update(params);
  }

  @Delete('/:id')
  delete(@Param('id') id: string, @Res() res: Response): any {
    this.wordService.deleteWord(id)
      .then(data => {
        if (data.affected) {
          res.status(HttpStatus.OK).send({code: 200, data: 'success'})
        } else {
          res.status(HttpStatus.EXPECTATION_FAILED).send({code: 417, data: 'failed'})
        }
      })
      .catch(err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({code: 500, data: err})
      })
  }
}
