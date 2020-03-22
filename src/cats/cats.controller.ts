import {
  Controller,
  Get,
  Res,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get('/:id')
  getCatById(@Param('id') id) {
    if (isNaN(parseInt(id))) {
      throw new HttpException(
        "Oh no, cats don't like funny ids!",
        HttpStatus.BAD_REQUEST,
      );
    }

    return {
      id: 'cat ' + id,
    };
  }

  @Get()
  getCat(@Res() response: Response) {
    response.sendStatus(400);
  }
}
