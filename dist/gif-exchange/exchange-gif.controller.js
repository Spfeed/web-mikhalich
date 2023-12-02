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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeGifController = void 0;
const common_1 = require("@nestjs/common");
const currency_service_1 = require("../currency/currency.service");
const gif_service_1 = require("../giphy/gif.service");
let ExchangeGifController = class ExchangeGifController {
    constructor(giphyService, currencyService) {
        this.giphyService = giphyService;
        this.currencyService = currencyService;
    }
    async getExchangeGif(targetCurrency) {
        try {
            const baseCurrency = 'USD';
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);
            const todayExchangeRate = await this.currencyService.getExchangeRate(baseCurrency, targetCurrency, today);
            const yesterdayExchangeRate = await this.currencyService.getExchangeRate(baseCurrency, targetCurrency, yesterday);
            let tag;
            if (todayExchangeRate > yesterdayExchangeRate) {
                tag = 'rich';
            }
            else {
                tag = 'broke';
            }
            const gifUrl = await this.giphyService.getRandomGifByTag(tag);
            const todayDateString = today.toISOString().split('T')[0];
            const yesterdayDateString = yesterday.toISOString().split('T')[0];
            return {
                url: gifUrl,
                exchangeRate: todayExchangeRate,
                exchangeRateY: yesterdayExchangeRate,
                date: todayDateString,
                dateY: yesterdayDateString,
            };
        }
        catch (error) {
            console.error('Error fetching random gif:', error);
        }
    }
};
exports.ExchangeGifController = ExchangeGifController;
__decorate([
    (0, common_1.Get)('getgif'),
    __param(0, (0, common_1.Query)('targetCurrency')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExchangeGifController.prototype, "getExchangeGif", null);
exports.ExchangeGifController = ExchangeGifController = __decorate([
    (0, common_1.Controller)('exchange-gif'),
    __metadata("design:paramtypes", [gif_service_1.GiphyService,
        currency_service_1.CurrencyService])
], ExchangeGifController);
//# sourceMappingURL=exchange-gif.controller.js.map