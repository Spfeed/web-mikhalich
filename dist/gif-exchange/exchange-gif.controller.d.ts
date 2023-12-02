import { CurrencyService } from '../currency/currency.service';
import { GiphyService } from '../giphy/gif.service';
export declare class ExchangeGifController {
    private readonly giphyService;
    private readonly currencyService;
    constructor(giphyService: GiphyService, currencyService: CurrencyService);
    getExchangeGif(targetCurrency: string): Promise<{
        url: string;
        exchangeRate: number;
        exchangeRateY: number;
        date: string;
        dateY: string;
    }>;
}
