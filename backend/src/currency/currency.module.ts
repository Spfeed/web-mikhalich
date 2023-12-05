import { Module } from '@nestjs/common';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';
import { DateHelperModule } from '../datehelper/datehelper.module';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { CurrencyModel } from './model/currency.model';

@Module({
  controllers: [CurrencyController],
  providers: [CurrencyService],
  imports:[
    TypegooseModule.forFeature([
      {
        typegooseClass: CurrencyModel,
        schemaOptions: {
          collection: 'Exchangerates',
        },
      },
    ]),
    DateHelperModule,
  ],
  exports: [CurrencyService],
})
export class CurrencyModule {}
