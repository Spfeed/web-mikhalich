// giphy.controller.ts
import { Controller, Get } from '@nestjs/common';
import { GiphyService } from './gif.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@Controller('giphy')
@ApiTags('giphy')
export class GiphyController {
  constructor(
    private readonly giphyService: GiphyService,
  ) {}

  @Get('random-gif')
  @ApiOperation({summary: 'Get random gif'})
  @ApiResponse({status: 200, description: 'Return a random gif'})
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
