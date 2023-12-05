"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiphyController = void 0;
const common_1 = require("@nestjs/common");
const gif_service_1 = require("./gif.service");
const swagger_1 = require("@nestjs/swagger");
let GiphyController = class GiphyController {
    constructor(giphyService) {
        this.giphyService = giphyService;
    }
    async getRandomGif() {
        try {
            const tag = 'rich';
            const gifUrl = await this.giphyService.getRandomGifByTag(tag);
            return { url: gifUrl };
        }
        catch (error) {
            console.error('Error fetching random gif:', error);
        }
    }
};
exports.GiphyController = GiphyController;
__decorate([
    (0, common_1.Get)('random-gif'),
    (0, swagger_1.ApiOperation)({ summary: 'Get random gif' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a random gif' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GiphyController.prototype, "getRandomGif", null);
exports.GiphyController = GiphyController = __decorate([
    (0, common_1.Controller)('giphy'),
    (0, swagger_1.ApiTags)('giphy'),
    __metadata("design:paramtypes", [gif_service_1.GiphyService])
], GiphyController);
//# sourceMappingURL=gif.controller.js.map