import { Body, Controller, Get, Header, Param, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { Cat } from './cat.interface'
import { CatsService } from './cats.service'
import { CreateCatDto } from './dto'

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) { }
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto)
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  @Get(':id')
  findOne(
    @Param('id') id,
    @Query() query,
  ): string {
    return 'one test'
  }
}
