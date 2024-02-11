import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictationModule } from './dictation/dictation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Ceci permet à ConfigModule de charger les variables d'environnement et de les rendre disponibles globalement
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "mysql",
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10) || 3306, // Assurez-vous d'ajouter la variable d'environnement DB_PORT si nécessaire
        username: process.env.DB_USERNAME, // Assurez-vous que ceci correspond à votre variable d'environnement réelle pour le nom d'utilisateur
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: false, // À utiliser avec prudence en prod
        logging: true,
      }),
    }),
    DictationModule,
    AuthModule,
    // autres modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
