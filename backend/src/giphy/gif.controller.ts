// giphy.controller.ts
import { Controller, Get } from '@nestjs/common';
import { GiphyService } from './gif.service';

@Controller('giphy')
export class GiphyController {
  constructor(
    private readonly giphyService: GiphyService,
  ) {}

  @Get('random-gif')
  async getRandomGif(): Promise<{ url: string }> {
    try {
      const tag = 'rich'; // Или 'broke' в зависимости от вашей логики
      const gifUrl = await this.giphyService.getRandomGifByTag(tag);
      return { url: gifUrl };
    } catch (error) {
      console.error('Error fetching random gif:', error);
    }
  }
}
