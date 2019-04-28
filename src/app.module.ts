import { Category } from './entities/category.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';
import { Word } from './entities/word.entity';
import { WordService } from './services/word.service';
import { WordController } from './controllers/word.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'timicode',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Category, Word]),
  ],
  controllers: [AppController, CategoryController, WordController],
  providers: [AppService, CategoryService, WordService],
})
export class AppModule { }
