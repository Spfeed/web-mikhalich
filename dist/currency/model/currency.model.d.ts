import { TimeStamps, Base } from "@typegoose/typegoose/lib/defaultClasses";
export interface CurrencyModel extends Base {
}
export declare class CurrencyModel extends TimeStamps {
    sourceCurrency: string;
    targetCurrencey: string;
    value: number;
}
