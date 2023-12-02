// exchange-gif.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { CurrencyService } from '../currency/currency.service';
import { GiphyService } from '../giphy/gif.service';

@Controller('exchange-gif')
export class ExchangeGifController {
  constructor(
    private readonly giphyService: GiphyService,
    private readonly currencyService: CurrencyService,) {}

  @Get('getgif')
  async getExchangeGif(@Query('targetCurrency') targetCurrency: string): Promise<{url: string; exchangeRate: number, exchangeRateY: number, date: string, dateY: string  }> {
    try {
      const baseCurrency = 'USD';
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);

      const todayExchangeRate = await this.currencyService.getExchangeRate(
        baseCurrency,
        targetCurrency,
        today,
      );
      const yesterdayExchangeRate = await this.currencyService.getExchangeRate(
        baseCurrency,
        targetCurrency,
        yesterday,
      );

      let tag: string;
      if (todayExchangeRate > yesterdayExchangeRate) {
        tag = 'rich';
      } else {
        tag = 'broke';
      }

      const gifUrl = await this.giphyService.getRandomGifByTag(tag);
      const todayDateString = today.toISOString().split('T')[0];
      const yesterdayDateString = yesterday.toISOString().split('T')[0];
      return {
        url: gifUrl,
        exchangeRate: todayExchangeRate,
        exchangeRateY: yesterdayExchangeRate,
        date: todayDateString,
        dateY: yesterdayDateString,
      };
    } catch (error) {
      console.error('Error fetching random gif:', error);
    }

  }
}
