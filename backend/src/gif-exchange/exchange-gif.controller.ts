// exchange-gif.controller.ts
import { Controller, Get, Query, Inject } from '@nestjs/common';
import { CurrencyService } from '../currency/currency.service';
import { GiphyService } from '../giphy/gif.service';
import { DateHelperService } from '../datehelper/datehelper.service';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { RequestBodyDTO } from './dto/response-body.dto';
import { error } from 'console';

@Controller('exchange-gif')
@ApiTags('exchange-gif')
export class ExchangeGifController {
  constructor(
    @Inject(CurrencyService)
    private readonly currencyService: CurrencyService,
    @Inject(GiphyService)
    private readonly giphyService: GiphyService,
    @Inject(DateHelperService)
    private readonly datehelperService: DateHelperService,
    ) {}

  @Get('getGif')
  @ApiQuery({name: 'from'})
  @ApiQuery({name: 'to'})
  @ApiOperation({summary: 'Get gif'})
  @ApiResponse({status: 200, description: "Return gif"})
  async getExchangeGif(@Query() query: RequestBodyDTO): Promise<{url: string; exchangeRate: string, exchangeRateY: string, date: string, dateY: string  }> {
    try {
      const today = await this.currencyService.getExchangeRate(
        query.from,
        [query.to],
        this.datehelperService.currentDate(),
      );
      const yesterday = await this.currencyService.getExchangeRate(
        query.from,
        [query.to],
        this.datehelperService.previousDate(),
      );
      if (today.rates[query.to]<yesterday.rates[query.to]){
        const gif = await this.giphyService.getRandomGifByTag('rich');
        return{
          url: gif,
          exchangeRate: today.rates[query.to],
          exchangeRateY: yesterday.rates[query.to],
          date: this.datehelperService.currentDate(),
          dateY: this.datehelperService.previousDate(),
        };
      }
      else {
        const gif = await this.giphyService.getRandomGifByTag('broke');
        return{
          url: gif,
          exchangeRate: today.rates[query.to],
          exchangeRateY: yesterday.rates[query.to],
          date: this.datehelperService.currentDate(),
          dateY: this.datehelperService.previousDate(),
        };
      }
      
    } catch (error) {
      console.error('Error fetching random gif:', error);
    }

  }
}
