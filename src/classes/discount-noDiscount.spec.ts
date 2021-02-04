import { NoDiscount } from './discount';

const createSut = () => new NoDiscount();

describe('NoDiscount', () => {
  afterEach(() => jest.clearAllMocks());

  test('should verify return property discount with zero', () => {
    const sut = createSut();

    expect(sut).toHaveProperty('discount', 0);
  });

  test('should verify property calulate', () => {
    const sut = createSut();

    const calculateSpy = jest.spyOn(sut, 'calculate');

    expect(sut).toHaveProperty('calculate');

    sut.calculate(10);

    expect(calculateSpy).toHaveBeenCalledTimes(1);

    expect(calculateSpy).toHaveBeenCalledWith(10);

    expect(calculateSpy).toHaveLastReturnedWith(10);
  });
});
