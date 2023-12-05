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
exports.CurrencyController = void 0;
const common_1 = require("@nestjs/common");
const currency_service_1 = require("./currency.service");
const swagger_1 = require("@nestjs/swagger");
const datehelper_service_1 = require("../datehelper/datehelper.service");
let CurrencyController = class CurrencyController {
    constructor(currencyService, datehelperService) {
        this.currencyService = currencyService;
        this.datehelperService = datehelperService;
    }
    async getExchangeRate() {
        try {
            const exchangeRate = await this.currencyService.getExchangeRate('USD', ['AUD', 'EUR', "RUB"], this.datehelperService.currentDate());
            return { exchangeRate };
        }
        catch (error) {
            console.error('Error fetching exchange rate:', error);
            return { error: 'Error fetching exchange rate', what: this.datehelperService.currentDate(), };
        }
    }
    async getAll() {
        return this.currencyService.getAllRates();
    }
};
exports.CurrencyController = CurrencyController;
__decorate([
    (0, common_1.Get)('exchange-rate'),
    (0, swagger_1.ApiOperation)({ summary: 'Get rates' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return rates' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "getExchangeRate", null);
__decorate([
    (0, common_1.Get)('getAllRates'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all rates' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all rates' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "getAll", null);
exports.CurrencyController = CurrencyController = __decorate([
    (0, common_1.Controller)('currency'),
    (0, swagger_1.ApiTags)('currency'),
    __param(1, (0, common_1.Inject)(datehelper_service_1.DateHelperService)),
    __metadata("design:paramtypes", [currency_service_1.CurrencyService,
        datehelper_service_1.DateHelperService])
], CurrencyController);
//# sourceMappingURL=currency.controller.js.map