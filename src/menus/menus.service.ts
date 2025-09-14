import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}

  async getAllMenus(): Promise<Menu[]> {
    return await this.menuRepository.find();
  }

  async createMenu(createMenuDto: CreateMenuDto): Promise<Menu> {
    const { name, price } = createMenuDto;

    const menu = this.menuRepository.create({
      name,
      price,
    });

    await this.menuRepository.save(menu);

    return menu;
  }
}
