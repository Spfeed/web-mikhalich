// exchange-gif.module.ts
import { Module } from '@nestjs/common';
import { CurrencyModule } from '../currency/currency.module';
import { GiphyModule } from '../giphy/gif.module';
import { CurrencyService } from '../currency/currency.service';
import { GiphyService } from '../giphy/gif.service';
import { ExchangeGifController } from './exchange-gif.controller';

@Module({
  providers: [GiphyService, CurrencyService],
  imports: [CurrencyModule, GiphyModule],
  controllers: [ExchangeGifController],
})
export class ExchangeGifModule {}
