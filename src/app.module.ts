import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { BoardsModule } from './boards/boards.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';



@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    BoardsModule,
    PostsModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
