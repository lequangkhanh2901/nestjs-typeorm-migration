import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cateories' })
export default class Categoty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
