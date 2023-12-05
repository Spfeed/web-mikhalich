import { Module } from '@nestjs/common';
import { DateHelperService } from './datehelper.service';
import { Model } from 'mongoose';

@Module({
    providers: [DateHelperService],
    exports: [DateHelperService],
})
export class DateHelperModule {}

