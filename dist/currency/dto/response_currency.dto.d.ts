export default class ResponseCurrencyDTO {
    base: string;
    rates: {
        [key: string]: string;
    };
}
