import axios from 'axios';

export class GiphyService {
  private readonly apiKey = 'uDFmYr9EbIDi727aj7ahIBBXpvWFsF0W';

  async getRandomGifByTag(tag: string): Promise<string> {
    try {
      const response = await axios.get('https://api.giphy.com/v1/gifs/random', {
        params: {
          api_key: this.apiKey,
          tag: tag,
        },
      }); 
      return response.data.data.images.original.url;
    } catch (error) {
      throw error;
    }
  }
}
