import { Field, InputType } from "@nestjs/graphql";

//class-validator 사용 해보기. 유효성검사 엄청 쉽게 할 수 있음.

@InputType()
export class CreateUserInput{

    @Field()
    name: string;

    @Field()
    password: string;

    @Field()
    nickname: string;

    @Field()
    military_unit: string;

    @Field()
    division: string;
    
    


}