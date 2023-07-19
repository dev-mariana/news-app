import { Module } from '@nestjs/common';
import { JournalistsModule } from './application/journalists/journalists.module';
import { DatabaseModule } from './infra/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@application/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    JournalistsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
