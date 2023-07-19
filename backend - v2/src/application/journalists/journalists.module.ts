import { Module } from '@nestjs/common';
import { JournalistsService } from './services/journalists.service';
import { JournalistsController } from './controllers/journalists.controller';
import { DatabaseModule } from '@infra/database/database.module';
import { JournalistsRepository } from './repositories/journalists.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [JournalistsController],
  providers: [JournalistsService, JournalistsRepository],
  exports: [JournalistsService],
})
export class JournalistsModule {}
