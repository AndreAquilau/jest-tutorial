import { Messaging } from './messaging';

const createSut = () => new Messaging();

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  test('should return undefined', () => {
    const sut = createSut();

    expect(sut.sendMessage('Testando returno sendMessage')).toBeUndefined();
  });

  test('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.sendMessage('Testando chamada de console.log');

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  test('should call console.log with "Mensagem enviada:" and msg', () => {
    const sut = createSut();

    const consoleSpy = jest.spyOn(console, 'log');

    sut.sendMessage('teste');

    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
});
