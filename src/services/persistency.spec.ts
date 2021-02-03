describe('Testando alguma coisa', () => {
  it('describe for test (IT)', () => {
    const number = 1;

    expect(number).toBe(1);
  });

  test('describe for test (TEST)', () => {
    const nome = 'Andre';
    expect(nome).toBe('Andre');
  });
});
