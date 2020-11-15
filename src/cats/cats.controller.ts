import { Controller, Get, Header, Param, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return '111'
  }
  @Get()
  @Header('set-cookie', 'token=666888')
  findAll(@Req() request: Request): number[] {
    console.log(request);

    return [1, 2, 3, 4]
  }
  @Get(':id')
  findOne(@Param('id') id, @Query() query): string {
    console.log(id);
    console.log(query);
    return 'one test'
  }
}
