import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { PotsService } from './pots.service';
import { createPotDto } from './create-pot.dto';

@Controller('api/v1')
export class PotsController {
  constructor(private readonly potsService: PotsService) {}

  @Post('/pots')
  async create(@Body() createPotDto: createPotDto) {
    try {
      const data = await this.potsService.create(createPotDto);
      return { message: 'created', data: data };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_GATEWAY,
          error: error.message,
        },
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  @Get('/pots')
  async findAll() {
    try {
      const data = await this.potsService.findAll();
      return { message: 'sucess', data: data };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Not found',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
