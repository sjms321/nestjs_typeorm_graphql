import { Resolver ,Query, Mutation, Args, Int} from '@nestjs/graphql';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardInput } from './dto/create-board.input';

@Resolver(of => Board)
export class BoardsResolver {
    constructor(private boardService: BoardsService){}

    @Query(returns => Board)
    get(@Args('id',{type: ()=> Int})id : number):Promise<Board>{
        return this.boardService.findOne(id);
    }

    @Query(returns => [Board])
    users():Promise<Board[]>{
        return this.boardService.findAll();
    }

    @Mutation(returns => Board)
    createUser(@Args('createBoardInput')CreateBoardInput:CreateBoardInput):Promise<Board>{
        return this.boardService.createBoard(CreateBoardInput);
    }
}
