import { Controller, Get, Query } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('exchange-rate')
  async getExchangeRate(
    @Query('baseCurrency') baseCurrency: string,
    @Query('targetCurrency') targetCurrency: string,
    @Query('date') date: Date, // Добавляем параметр даты
  ) {
    try {
      const exchangeRate = await this.currencyService.getExchangeRate(
        baseCurrency,
        targetCurrency,
        date,
      );
      return { exchangeRate };
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      return { error: 'Error fetching exchange rate' };
    }
  }
}
