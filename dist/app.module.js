"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const currency_module_1 = require("./currency/currency.module");
const gif_module_1 = require("./giphy/gif.module");
const currency_service_1 = require("./currency/currency.service");
const currency_controller_1 = require("./currency/currency.controller");
const gif_service_1 = require("./giphy/gif.service");
const gif_controller_1 = require("./giphy/gif.controller");
const exchange_gif_module_1 = require("./gif-exchange/exchange-gif.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [currency_module_1.CurrencyModule, gif_module_1.GiphyModule, gif_module_1.GiphyModule, exchange_gif_module_1.ExchangeGifModule],
        controllers: [app_controller_1.AppController, currency_controller_1.CurrencyController, gif_controller_1.GiphyController],
        providers: [app_service_1.AppService, currency_service_1.CurrencyService, gif_service_1.GiphyService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map