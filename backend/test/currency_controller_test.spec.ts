import { CurrencyController } from '../src/currency/currency.controller';
import { CurrencyService } from '../src/currency/currency.service';
import { DateHelperService } from '../src/datehelper/datehelper.service';
import { CurrencyModel } from '../src/currency/model/currency.model';

describe('CurrencyController', () => {
    let currencyController: CurrencyController;
    let currencyService: CurrencyService;
    let datehelperService: DateHelperService;
  
    beforeEach(() => {
      currencyService = {
        getExchangeRate: jest.fn(),
        getAllRates: jest.fn(),
      } as unknown as CurrencyService;
  
      datehelperService = {
        currentDate: jest.fn(),
      } as unknown as DateHelperService;
  
      currencyController = new CurrencyController(currencyService, datehelperService);
    });
  
    describe('getExchangeRate', () => {
      it('should return exchange rates', async () => {
        const expectedRates = {
          USD: {
            AUD: 1.3,
            EUR: 0.9,
            RUB: 75.5,
          },
        };
  
        (currencyService.getExchangeRate as jest.Mock).mockResolvedValue(expectedRates);
        (datehelperService.currentDate as jest.Mock).mockReturnValue(new Date('2023-01-01'));
  
        const result = await currencyController.getExchangeRate();
  
        expect(result).toEqual({ exchangeRate: expectedRates });
      });
  
      it('should handle error fetching exchange rate', async () => {
        const error = new Error('Failed to fetch exchange rate');
  
        (currencyService.getExchangeRate as jest.Mock).mockRejectedValue(error);
        (datehelperService.currentDate as jest.Mock).mockReturnValue(new Date('2023-01-01'));
  
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
  
        const result = await currencyController.getExchangeRate();
  
        expect(result).toEqual({
          error: 'Error fetching exchange rate',
          what: new Date('2023-01-01'),
        });
  
        expect(consoleSpy).toHaveBeenCalledWith('Error fetching exchange rate:', error);
        consoleSpy.mockRestore();
      });
    });
  });
