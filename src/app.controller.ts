import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Inject(AppService)
  private readonly appService: AppService;
  constructor() {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
