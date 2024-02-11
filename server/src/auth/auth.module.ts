import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
<<<<<<< HEAD
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [JwtStrategy],
  exports: [PassportModule],
=======

@Module({
  providers: [AuthService]
>>>>>>> 95d518fa73bd8dab1c697c00573348928ad04a7e
})
export class AuthModule {}
