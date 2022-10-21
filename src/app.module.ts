import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterWallet } from './wallet/entities/registerWallet.entity';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_LOCAL_HOST,
      port: parseInt(process.env.DB_PORT),
      username: 'postgres',
      password: process.env.DB_LOCAL_PASSWORD,
      database: process.env.DB_LOCAL_DATABASE,
      entities: [RegisterWallet],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
