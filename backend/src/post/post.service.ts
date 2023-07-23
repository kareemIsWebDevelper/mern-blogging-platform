import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { CreatePostDto, UpdatePostDto } from './dto/create-post.dto';
import { Post } from './post.model';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Post') private readonly postModel: Model<Post & Document>,
  ) {}

  async getAllPosts() {
    return await this.postModel.find().exec();
  }

  async getSinglePost(postId: string) {
    return await this.postModel.findById(postId).exec();
  }

  async createPost(createPostDto: CreatePostDto) {
    const { title, body } = createPostDto;
    return await this.postModel.create({ title, body });
  }

  async updatePost(postId: string, updatePostDto: UpdatePostDto) {
    const post = await this.postModel.findByIdAndUpdate(postId).exec();
    if (!post) {
      throw new NotFoundException('Post not found');
    }

    if (updatePostDto.title) {
      post.title = updatePostDto.title;
    }
    if (updatePostDto.body) {
      post.body = updatePostDto.body;
    }

    return await post.save();
  }

  async deletePost(postId: string) {
    const deletedPost = await this.postModel.findByIdAndDelete(postId).exec();
    if (!deletedPost) {
      throw new NotFoundException('Post not found');
    }
    return deletedPost;
  }
}
