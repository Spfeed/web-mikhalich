import axios from 'axios';

export default class CurrencyRateController {
    static async getGif(from: string, to: string) {
        return await axios.get('http://localhost:3000/api/exchange-gif/getGif', {
            params: {from, to},
        });
    }
}