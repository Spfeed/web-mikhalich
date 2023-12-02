"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyService = void 0;
const axios_1 = require("axios");
const API_KEY = '4310eb12fabd48c89ee86ab7d202ef07';
class CurrencyService {
    async getExchangeRate(baseCurrency, targetCurrency, date) {
        try {
            const dateString = date.toISOString().split('T')[0];
            const response = await axios_1.default.get(`https://openexchangerates.org/api/historical/${dateString}.json?app_id=${API_KEY}&base=${baseCurrency}`);
            const rates = response.data.rates;
            const exchangeRate = rates[targetCurrency];
            return exchangeRate;
        }
        catch (error) {
            console.error('Error fetching exchange rate:', error);
            throw error;
        }
    }
}
exports.CurrencyService = CurrencyService;
//# sourceMappingURL=currency.service.js.map