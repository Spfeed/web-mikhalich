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
const datehelper_service_1 = require("../datehelper/datehelper.service");
const swagger_1 = require("@nestjs/swagger");
const response_body_dto_1 = require("./dto/response-body.dto");
let ExchangeGifController = class ExchangeGifController {
    constructor(currencyService, giphyService, datehelperService) {
        this.currencyService = currencyService;
        this.giphyService = giphyService;
        this.datehelperService = datehelperService;
    }
    async getExchangeGif(query) {
        try {
            const today = await this.currencyService.getExchangeRate(query.from, [query.to], this.datehelperService.currentDate());
            const yesterday = await this.currencyService.getExchangeRate(query.from, [query.to], this.datehelperService.previousDate());
            if (today.rates[query.to] < yesterday.rates[query.to]) {
                const gif = await this.giphyService.getRandomGifByTag('rich');
                return {
                    url: gif,
                    exchangeRate: today.rates[query.to],
                    exchangeRateY: yesterday.rates[query.to],
                    date: this.datehelperService.currentDate(),
                    dateY: this.datehelperService.previousDate(),
                };
            }
            else {
                const gif = await this.giphyService.getRandomGifByTag('broke');
                return {
                    url: gif,
                    exchangeRate: today.rates[query.to],
                    exchangeRateY: yesterday.rates[query.to],
                    date: this.datehelperService.currentDate(),
                    dateY: this.datehelperService.previousDate(),
                };
            }
        }
        catch (error) {
            console.error('Error fetching random gif:', error);
        }
    }
};
exports.ExchangeGifController = ExchangeGifController;
__decorate([
    (0, common_1.Get)('getGif'),
    (0, swagger_1.ApiQuery)({ name: 'from' }),
    (0, swagger_1.ApiQuery)({ name: 'to' }),
    (0, swagger_1.ApiOperation)({ summary: 'Get gif' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Return gif" }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [response_body_dto_1.RequestBodyDTO]),
    __metadata("design:returntype", Promise)
], ExchangeGifController.prototype, "getExchangeGif", null);
exports.ExchangeGifController = ExchangeGifController = __decorate([
    (0, common_1.Controller)('exchange-gif'),
    (0, swagger_1.ApiTags)('exchange-gif'),
    __param(0, (0, common_1.Inject)(currency_service_1.CurrencyService)),
    __param(1, (0, common_1.Inject)(gif_service_1.GiphyService)),
    __param(2, (0, common_1.Inject)(datehelper_service_1.DateHelperService)),
    __metadata("design:paramtypes", [currency_service_1.CurrencyService,
        gif_service_1.GiphyService,
        datehelper_service_1.DateHelperService])
], ExchangeGifController);
//# sourceMappingURL=exchange-gif.controller.js.map