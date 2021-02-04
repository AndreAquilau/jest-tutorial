import { TenPercentDiscount } from './discount';

const createSut = () => new TenPercentDiscount();

describe('TenPercentDiscount', () => {
  afterEach(() => jest.clearAllMocks());

  test('should return discount with value 0.1', () => {
    const sut = createSut();
  });
});
