import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { JournalistsModule } from '@application/journalists/journalists.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '5m' },
    }),
    JournalistsModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
