import { CurrencyModel } from './model/currency.model';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import ResponseCurrencyDTO from './dto/response_currency.dto';
export declare class CurrencyService {
    private readonly currencyModel;
    constructor(currencyModel: ModelType<CurrencyModel>);
    getExchangeRate(baseCurrency: string, currencies: string[], date: string): Promise<ResponseCurrencyDTO>;
    getAllRates(): Promise<DocumentType<CurrencyModel>[]>;
}
