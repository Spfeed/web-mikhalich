"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeGifModule = void 0;
const common_1 = require("@nestjs/common");
const currency_module_1 = require("../currency/currency.module");
const gif_module_1 = require("../giphy/gif.module");
const currency_service_1 = require("../currency/currency.service");
const gif_service_1 = require("../giphy/gif.service");
const exchange_gif_controller_1 = require("./exchange-gif.controller");
let ExchangeGifModule = class ExchangeGifModule {
};
exports.ExchangeGifModule = ExchangeGifModule;
exports.ExchangeGifModule = ExchangeGifModule = __decorate([
    (0, common_1.Module)({
        providers: [gif_service_1.GiphyService, currency_service_1.CurrencyService],
        imports: [currency_module_1.CurrencyModule, gif_module_1.GiphyModule],
        controllers: [exchange_gif_controller_1.ExchangeGifController],
    })
], ExchangeGifModule);
//# sourceMappingURL=exchange-gif.module.js.map