import { Controller, Get, Param } from '@nestjs/common';

@Controller({ host: 'dogs.192.168.1.1.xip.io', path: 'dogs' })
export class DogsController {
  @Get('/:id')
  getDogById(@Param('id') id) {
    return {
      id: 'dog ' + id,
    };
  }
}
