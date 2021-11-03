import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';



@Injectable()
export class UsersService{

    constructor(@InjectRepository(User) private usersRepository: Repository<User>){

    }


    async createUser(createUserInput : CreateUserInput):Promise<User>{
        const newUser = this.usersRepository.create(createUserInput); //new = new User(); new.name = input.name

        return this.usersRepository.save(newUser);
    }


    async findAll(): Promise<User[]>{
        return this.usersRepository.find();//select * user와같음
    }

    async findOne(id:number): Promise<User>{
        return this.usersRepository.findOneOrFail(id);
    }
}