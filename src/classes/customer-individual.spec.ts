import { IndividualCustomer } from './customer';
// teste
const createSut = (firstName: string, lastName: string, cpf: string) => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  test('should return property firstName, lastName and cpf', () => {
    const person = { firstName: 'Andre', lastName: 'Aquilau', cpf: '111.111.111-11' };

    const sut = createSut(person.firstName, person.lastName, person.cpf);

    expect(sut).toHaveProperty('firstName', person.firstName);
    expect(sut).toHaveProperty('lastName', person.lastName);
    expect(sut).toHaveProperty('cpf', person.cpf);
  });

  test('should verify method getName', () => {
    const person = { firstName: 'Andre', lastName: 'Aquilau', cpf: '111.111.111-11' };

    const sut = createSut(person.firstName, person.lastName, person.cpf);

    const getNameSpy = jest.spyOn(sut, 'getName');

    expect(sut).toHaveProperty('getName');

    sut.getName();

    expect(getNameSpy).toHaveBeenCalledTimes(1);

    expect(getNameSpy).not.toBeUndefined();

    expect(getNameSpy).toHaveReturnedWith(`${person.firstName} ${person.lastName}`);
  });

  test('should verify method getIDN', () => {
    const person = { firstName: 'Andre', lastName: 'Aquilau', cpf: '111.111.111-11' };
    const sut = createSut(person.firstName, person.lastName, person.cpf);

    const getIDNSpy = jest.spyOn(sut, 'getIDN');

    expect(sut).toHaveProperty('getIDN');

    sut.getIDN();

    expect(getIDNSpy).toHaveBeenCalledTimes(1);

    expect(getIDNSpy).not.toBeUndefined();

    expect(getIDNSpy).toHaveReturnedWith(sut.cpf);
  });
});
