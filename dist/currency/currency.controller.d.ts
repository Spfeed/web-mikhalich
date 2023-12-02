import { CurrencyService } from './currency.service';
export declare class CurrencyController {
    private readonly currencyService;
    constructor(currencyService: CurrencyService);
    getExchangeRate(baseCurrency: string, targetCurrency: string, date: Date): Promise<{
        exchangeRate: number;
        error?: undefined;
    } | {
        error: string;
        exchangeRate?: undefined;
    }>;
}
