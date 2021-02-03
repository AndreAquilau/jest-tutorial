describe('Primite values', () => {
  test('should test jest assertions', () => {
    const number = 10;

    // Teste em dados Primitivos

    expect(number).toBe(number);
    // espero ser

    expect(number).toEqual(number);
    // espero igualar

    expect(number).not.toBeNull();
    // espero nao ser nulo

    expect(number).not.toBeFalsy();
    // espero nao ser falso

    expect(number).toBeGreaterThan(9);
    // espero ser maior que 9

    expect(number).toBeGreaterThanOrEqual(10);
    // espero ser maior que 10 ou igual

    expect(number).toBeLessThan(11);
    // espero ser menor que 11

    expect(number).toBeLessThanOrEqual(10);
    // espero ser menor que 10 ou igual

    expect(number).toBeCloseTo(10);
    // recebe dois paramentros primerio value, segundo casas decimal default 2
    // espero esta perto de 10

    expect(number).toHaveProperty('toString');
    // espero ter propriedade number.toString
  });
});

describe('Objects', () => {
  test('should test jest assertions', () => {
    const person = {
      name: 'Andre',
      age: 20,
    };

    const anotherPerson = {
      name: 'Andre',
      age: 20,
    };

    /*

    expect(person).toBe(anotherPerson);

    toBe -> so funciona em valores primitivos.
    */

    expect(person).toEqual(anotherPerson);
    // expero igualar

    expect(person).toHaveProperty('name');
    // espero ter propriedade name

    expect(anotherPerson).toHaveProperty('age');
    // espero ter propriedade age

    expect(person.name).toBe('Andre');
    // espero na propriedade name Andre
    // Check Value Property
  });
});
