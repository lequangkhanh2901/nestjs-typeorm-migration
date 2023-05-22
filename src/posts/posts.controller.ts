import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Response } from 'express';
import { CreatePostDto } from './dto/createPost.dto';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get()
  getPosts() {
    return this.postService.getAll();
  }

  @Post()
  async createdPost(@Body() body: CreatePostDto, @Res() res: Response) {
    try {
      const response = await this.postService.create(body);
      return res.status(HttpStatus.CREATED).json({
        response,
      });
    } catch (error) {
      console.log(error);

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'internal error',
      });
    }
  }
}
