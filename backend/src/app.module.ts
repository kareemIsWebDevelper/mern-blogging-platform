import { Module, OnModuleInit } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongooseAutopopulate from 'mongoose-autopopulate';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostSchema } from './post/post.model';

@Module({
  imports: [
    HttpModule, // Remove the square brackets
    MongooseModule.forRoot(
      'mongodb+srv://kareem:7410@cluster0.mwlkotc.mongodb.net/Blog?retryWrites=true&w=majority',
      {
        connectionFactory: (connection) => {
          connection.plugin(mongooseAutopopulate);
          return connection;
        },
      },
    ),
    MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {
    console.log('Connected to MongoDB');
  }
}
