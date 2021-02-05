import { FiftyPercentDiscount } from './discount';

const createSut = () => {
  return new FiftyPercentDiscount();
};

describe('FiftyPercentDiscount', () => {
  afterEach(() => jest.clearAllMocks());

  test('should return value property discount with 0.5', () => {
    const sut = createSut();

    expect(sut).toHaveProperty('discount', 0.5);
  });

  test('should verify return calculate with 50 percent discount', () => {
    const value = 100;
    const sut = createSut();
    const calculateSpy = jest.spyOn(sut, 'calculate');

    sut.calculate(value);

    expect(calculateSpy).toHaveBeenCalledTimes(1);
    expect(calculateSpy).not.toBeUndefined();
    expect(calculateSpy).toHaveBeenCalledWith(value);
    expect(calculateSpy).toHaveReturnedWith(value - value * 0.5);
  });
});
