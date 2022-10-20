import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { RegisterWallet } from './entities/registerWallet.entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule,TypeOrmModule.forFeature(
    [RegisterWallet]
  )],
  exports:[TypeOrmModule],
  controllers: [WalletController],
  providers: [WalletService]
})
export class WalletModule {}
