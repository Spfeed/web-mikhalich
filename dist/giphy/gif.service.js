"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiphyService = void 0;
const axios_1 = require("axios");
class GiphyService {
    constructor() {
        this.apiKey = 'uDFmYr9EbIDi727aj7ahIBBXpvWFsF0W';
    }
    async getRandomGifByTag(tag) {
        try {
            const response = await axios_1.default.get('https://api.giphy.com/v1/gifs/random', {
                params: {
                    api_key: this.apiKey,
                    tag: tag,
                },
            });
            return response.data.data.images.original.url;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.GiphyService = GiphyService;
//# sourceMappingURL=gif.service.js.map