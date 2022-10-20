import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletModule } from './wallet/wallet.module';
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm'
 @Module({
  imports: [TypeOrmModule.forRoot(),ConfigModule.forRoot({
    isGlobal: true,
  }),
  DatabaseModule,
  WalletModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
