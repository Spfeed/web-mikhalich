import { Test, TestingModule } from '@nestjs/testing';
import { GiphyController } from '../src/giphy/gif.controller';
import { GiphyService } from '../src/giphy/gif.service';

describe('GiphyController', () => {
  let giphyController: GiphyController;
  let giphyService: GiphyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GiphyController],
      providers: [GiphyService],
    }).compile();

    giphyController = module.get<GiphyController>(GiphyController);
    giphyService = module.get<GiphyService>(GiphyService);
  });

  describe('getRandomGif', () => {
    it('should return a random gif URL', async () => {
      const mockUrl = 'https://example.com/gif';
      jest.spyOn(giphyService, 'getRandomGifByTag').mockResolvedValue(mockUrl);

      const result = await giphyController.getRandomGif();
      expect(result).toEqual({ url: mockUrl });
    });

    it('should handle errors when fetching a random gif', async () => {
      const error = new Error('Failed to fetch gif');
      jest.spyOn(giphyService, 'getRandomGifByTag').mockRejectedValue(error);

      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      await giphyController.getRandomGif();

      expect(consoleSpy).toHaveBeenCalledWith(
        'Error fetching random gif:',
        error,
      );
      consoleSpy.mockRestore();
    });
  });
});
