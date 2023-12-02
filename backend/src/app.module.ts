import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrencyModule } from './currency/currency.module';
import { GiphyModule } from './giphy/gif.module'; 
import { CurrencyService } from './currency/currency.service';
import { CurrencyController } from './currency/currency.controller';
import { GiphyService } from './giphy/gif.service';
import { GiphyController } from './giphy/gif.controller';
import { ExchangeGifModule } from './gif-exchange/exchange-gif.module';

@Module({
  imports: [CurrencyModule, GiphyModule, GiphyModule,ExchangeGifModule], 
  controllers: [AppController, CurrencyController, GiphyController], 
  providers: [AppService, CurrencyService, GiphyService], 
})
export class AppModule {}