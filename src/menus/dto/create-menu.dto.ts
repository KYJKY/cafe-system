import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateMenuDto {
  // 메뉴명
  @IsNotEmpty()
  @IsString()
  name: string;

  // 메뉴가격
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;
}
