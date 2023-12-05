import { CurrencyService } from '../currency/currency.service';
import { GiphyService } from '../giphy/gif.service';
import { DateHelperService } from '../datehelper/datehelper.service';
import { RequestBodyDTO } from './dto/response-body.dto';
export declare class ExchangeGifController {
    private readonly currencyService;
    private readonly giphyService;
    private readonly datehelperService;
    constructor(currencyService: CurrencyService, giphyService: GiphyService, datehelperService: DateHelperService);
    getExchangeGif(query: RequestBodyDTO): Promise<{
        url: string;
        exchangeRate: string;
        exchangeRateY: string;
        date: string;
        dateY: string;
    }>;
}
