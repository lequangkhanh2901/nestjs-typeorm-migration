import { Injectable } from '@nestjs/common';
import Post from 'src/database/entity/post.entity';
import { CreatePostDto } from './dto/createPost.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  getAll() {
    return 'get all post';
  }

  async create(body: CreatePostDto) {
    const post = new Post();
    post.name = body.name;
    const response = await this.postRepository.save(post);
    return response;
  }
}
