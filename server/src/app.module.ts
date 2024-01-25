import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictationModule } from './dictation/dictation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      username: "root",
      password: "bensql",
      database: "projet_orthographe",
      entities: [
        "dist/**/*.entity{.ts,.js}"
      ],
      synchronize: false,
      logging: true,
    }),
    DictationModule,
    AuthModule,
    // autres modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
