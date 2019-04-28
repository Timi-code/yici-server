import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  word: string;

  @CreateDateColumn()
  creatDate: number;

  @UpdateDateColumn()
  updateDate: number;

  // 单词分类
  @Column('int')
  category: number;

  // 单词词类 如：动词、名次
  @Column({ nullable: true })
  type: number;

  // 单词汉语意思
  @Column()
  chinese: string;

  @Column({ nullable: true })
  examples: string;
}
