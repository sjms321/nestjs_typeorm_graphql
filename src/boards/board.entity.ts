import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Board{

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    //게시판의 이름
    @Column()
    @Field(type => String)
    name:String;

    @Column()
    @Field(type => String)
    division:String;

   

}