import { Module } from '@nestjs/common';
import { GiphyController } from './gif.controller';
import { GiphyService } from './gif.service';

@Module({
  controllers: [GiphyController],
  providers: [GiphyService], 
})
export class GiphyModule {}
