import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';

@Controller({
  version: VERSION_NEUTRAL
})
export class IndexController {
  @Get()
  getIndex() {
    return {'message': 'Running Bellona'};
  }
}
