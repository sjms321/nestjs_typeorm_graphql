import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsResolver } from './boards.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Board])],
  providers: [BoardsService, BoardsResolver]
})
export class BoardsModule {}
