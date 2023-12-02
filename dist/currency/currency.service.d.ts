export declare class CurrencyService {
    getExchangeRate(baseCurrency: string, targetCurrency: string, date: Date): Promise<number>;
}
