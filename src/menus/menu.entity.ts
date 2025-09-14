import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Menu {
  // 메뉴 ID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // 메뉴명
  @Column()
  name: string;

  // 메뉴가격
  @Column()
  price: number;

  // 생성 시각
  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;
}
