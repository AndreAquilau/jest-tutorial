import { EnterpriseCustomer } from './customer';
// teste
const createSut = (name: string, cnpj: string) => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('EnterpriseCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  test('should return property name, cnpj', () => {
    const person = { name: 'Andre', cnpj: '111.111.111-11' };

    const sut = createSut(person.name, person.cnpj);

    expect(sut).toHaveProperty('name', person.name);
    expect(sut).toHaveProperty('cnpj', person.cnpj);
  });

  test('should verify method getName', () => {
    const person = { name: 'Andre', cnpj: '111.111.111-11' };

    const sut = createSut(person.name, person.cnpj);

    const getNameSpy = jest.spyOn(sut, 'getName');

    expect(sut).toHaveProperty('getName');

    sut.getName();

    expect(getNameSpy).toHaveBeenCalledTimes(1);

    expect(getNameSpy).not.toBeUndefined();

    expect(getNameSpy).toHaveReturnedWith(`${person.name}`);
  });

  test('should verify method getIDN', () => {
    const person = { name: 'Andre', cnpj: '111.111.111-11' };
    const sut = createSut(person.name, person.cnpj);

    const getIDNSpy = jest.spyOn(sut, 'getIDN');

    expect(sut).toHaveProperty('getIDN');

    sut.getIDN();

    expect(getIDNSpy).toHaveBeenCalledTimes(1);

    expect(getIDNSpy).not.toBeUndefined();

    expect(getIDNSpy).toHaveReturnedWith(sut.cnpj);
  });
});
