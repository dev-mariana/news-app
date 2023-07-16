import { Module } from '@nestjs/common';
import { JournalistsModule } from './application/journalists/journalists.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [DatabaseModule, JournalistsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
