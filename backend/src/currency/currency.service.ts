import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@m8a/nestjs-typegoose';
import { CurrencyModel } from './model/currency.model';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import ResponseCurrencyDTO from './dto/response_currency.dto'

@Injectable()
export class CurrencyService {
  constructor(
    @InjectModel(CurrencyModel)
    private readonly currencyModel: ModelType<CurrencyModel>,
  ){}

  async getExchangeRate(baseCurrency: string, currencies: string[], date: string): Promise<ResponseCurrencyDTO> {
    try {
      const response = await axios.get<ResponseCurrencyDTO>(
        `${process.env.CURRENCY_API_URL}/api/historical/${date}.json
			?app_id=${process.env.CURRENCY_API_KEY}&base=${baseCurrency}&symbols=${currencies.join(',')}`,
      );
      this.currencyModel.create({
        sourceCurrency: baseCurrency,
        targetCurrencey: currencies[0],
        value: response.data.rates[currencies[0]]
      });
      return {
        base: response.data.base,
        rates: response.data.rates,
      };
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      throw error;
    }
  }

  async getAllRates(): Promise<DocumentType<CurrencyModel>[]> {
		return this.currencyModel.find().exec();
	}
}
