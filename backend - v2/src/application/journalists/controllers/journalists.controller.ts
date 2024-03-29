import { Controller, Post, Body } from '@nestjs/common';
import { JournalistsService } from '../services/journalists.service';
import { CreateJournalistDTO } from '../dto/create-journalist.dto';
import { JournalistEntity } from '../entities/journalist.entity';

@Controller('api/journalists')
export class JournalistsController {
  constructor(private readonly journalistService: JournalistsService) {}

  @Post('/register')
  create(
    @Body() createJournalist: CreateJournalistDTO,
  ): Promise<JournalistEntity> {
    return this.journalistService.create(createJournalist);
  }
}
