import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { RegisterWallet } from './entities/registerWallet.entity';


@Module({
  imports: [TypeOrmModule.forFeature(
    [RegisterWallet]
  )],
  exports:[TypeOrmModule],
  controllers: [WalletController],
  providers: [WalletService]
})
export class WalletModule {}
