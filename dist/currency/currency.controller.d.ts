import { CurrencyService } from './currency.service';
import { DateHelperService } from '../datehelper/datehelper.service';
import { DocumentType } from '@typegoose/typegoose';
import { CurrencyModel } from './model/currency.model';
export declare class CurrencyController {
    private readonly currencyService;
    private readonly datehelperService;
    constructor(currencyService: CurrencyService, datehelperService: DateHelperService);
    getExchangeRate(): Promise<any>;
    getAll(): Promise<DocumentType<CurrencyModel>[]>;
}
