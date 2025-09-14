import { Body, Controller, Get, Post } from '@nestjs/common';
import { MenusService } from './menus.service';
import { Menu } from './menu.entity';
import { CreateMenuDto } from './dto/create-menu.dto';

@Controller('menus')
export class MenusController {
  constructor(private menusService: MenusService) {}

  @Get()
  async getAllMenus(): Promise<Menu[]> {
    return await this.menusService.getAllMenus();
  }

  @Post()
  async createMenu(@Body() createMenuDto: CreateMenuDto): Promise<Menu> {
    return this.menusService.createMenu(createMenuDto);
  }
}
