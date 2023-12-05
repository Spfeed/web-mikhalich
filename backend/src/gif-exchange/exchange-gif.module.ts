// exchange-gif.module.ts
import { Module } from '@nestjs/common';
import { CurrencyModule } from '../currency/currency.module';
import { GiphyModule } from '../giphy/gif.module';
import { CurrencyService } from '../currency/currency.service';
import { GiphyService } from '../giphy/gif.service';
import { ExchangeGifController } from './exchange-gif.controller';
import { DateHelperModule } from '../datehelper/datehelper.module';
import { DateHelperService } from '../datehelper/datehelper.service';

@Module({
  providers: [GiphyService],
  imports: [CurrencyModule, GiphyModule,DateHelperModule],
  controllers: [ExchangeGifController],
})
export class ExchangeGifModule {}
