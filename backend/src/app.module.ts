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
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { getMongoConfig } from './configs/mongo.config';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { DateHelperModule } from './datehelper/datehelper.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    CurrencyModule, 
    GiphyModule, 
    DateHelperModule,
    ExchangeGifModule], 
  controllers: [AppController], 
  providers: [AppService], 
})
export class AppModule {}