import { GiphyService } from './gif.service';
export declare class GiphyController {
    private readonly giphyService;
    constructor(giphyService: GiphyService);
    getRandomGif(): Promise<{
        url: string;
    }>;
}
