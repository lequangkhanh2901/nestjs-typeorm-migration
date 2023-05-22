import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'posts' })
export default class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
