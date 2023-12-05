import { Prop } from "@typegoose/typegoose";
import { TimeStamps, Base } from "@typegoose/typegoose/lib/defaultClasses";

export interface CurrencyModel extends Base{}
export class CurrencyModel extends TimeStamps{
    @Prop()
    sourceCurrency: string;

    @Prop()
    targetCurrencey: string;

    @Prop()
    value: number;
}
