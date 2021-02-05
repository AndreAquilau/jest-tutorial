import { TenPercentDiscount } from './discount';

const createSut = () => new TenPercentDiscount();

describe('TenPercentDiscount', () => {
  afterEach(() => jest.clearAllMocks());

  test('should return discount with value 0.1', () => {
    const sut = createSut();

    expect(sut).toHaveProperty('discount', 0.1);
  });

  test('should verify return calculate with 10% discount', () => {
    const value = 100;
    const sut = createSut();
    const calculateSpy = jest.spyOn(sut, 'calculate');

    sut.calculate(value);
    expect(calculateSpy).not.toBeUndefined();
    expect(calculateSpy).toHaveBeenCalledTimes(1);
    expect(calculateSpy).toHaveBeenCalledWith(value);
    expect(calculateSpy).toHaveReturnedWith(value - value * 0.1);
  });
});
