import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class User{

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field(type => String)
    name:String;

    @Column()
    @Field(type => String)
    password:String;

    @Column()
    @Field(type => String)
    nickname:String;

    @Column()
    @Field(type => String)
    military_unit:String;

    @Column()
    @Field(type => String)
    dvision:String;

}