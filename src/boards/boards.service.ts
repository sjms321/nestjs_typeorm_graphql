import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardInput } from './dto/create-board.input';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
    constructor(@InjectRepository(Board) private boardsRepository: Repository<Board>){

    }


    async createBoard(createBoardInput : CreateBoardInput):Promise<Board>{
        const newBoard = this.boardsRepository.create(createBoardInput); //new = new User(); new.name = input.name

        return this.boardsRepository.save(newBoard);
    }


    async findAll(): Promise<Board[]>{
        return this.boardsRepository.find();//select * user와같음
    }

    async findOne(id:number): Promise<Board>{
        return this.boardsRepository.findOneOrFail(id);
    }

}
