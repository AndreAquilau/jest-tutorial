import { Product } from './product';

// system under test
const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  test('should verify property name and exists', () => {
    const sut = createSut('coca-cola', 7.5);

    expect(sut).toHaveProperty('name', 'coca-cola');
  });

  test('should verify property price exists', () => {
    const sut = createSut('borracha', 1.5);

    expect(sut).toHaveProperty('price', 1.5);
  });

  test('should return property name and price', () => {
    const sut = createSut('coca-cola', 7.5);

    expect(sut.name).toBe('coca-cola');

    expect(sut.price).toBeCloseTo(7.5);
  });
});
