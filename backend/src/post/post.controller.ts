import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto/create-post.dto';
@Controller('api/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAllPosts() {
    // Call the getAllPosts method on the PostService
    return await this.postService.getAllPosts();
  }

  @Get(':postId')
  async getSinglePost(@Param('postId') postId: string) {
    return await this.postService.getSinglePost(postId);
  }

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto) {
    return await this.postService.createPost(createPostDto);
  }

  @Patch(':postId')
  async updatePost(
    @Param('postId') postId: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return await this.postService.updatePost(postId, updatePostDto);
  }

  @Delete(':postId')
  async deletePost(@Param('postId') id: string) {
    return await this.postService.deletePost(id);
  }
}
