import { Controller, Get, Query, Inject } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { ApiOperation, ApiTags, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { DateHelperService } from '../datehelper/datehelper.service';
import { DocumentType } from '@typegoose/typegoose';
import { CurrencyModel } from './model/currency.model';



@Controller('currency')
@ApiTags('currency')
export class CurrencyController {
  constructor(
    private readonly currencyService: CurrencyService,
    @Inject(DateHelperService) private readonly datehelperService: DateHelperService,
    ) {}

  @Get('exchange-rate')
  @ApiOperation({summary: 'Get rates'})
  @ApiResponse({status: 200, description: 'Return rates'})
  async getExchangeRate(): Promise <any> {
    try {
      const exchangeRate = await this.currencyService.getExchangeRate(
        'USD',
        ['AUD','EUR',"RUB"],
        this.datehelperService.currentDate(),
      );
      return { exchangeRate };
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      return { error: 'Error fetching exchange rate',what: this.datehelperService.currentDate(), };
    }
  }

  @Get('getAllRates')
  @ApiOperation({summary: 'Get all rates'})
  @ApiResponse({status: 200, description: 'Return all rates'})
  async getAll(): Promise<DocumentType<CurrencyModel>[]>{
    return this.currencyService.getAllRates();
  }
}
