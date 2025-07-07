const StringCalculator = require('../src/StringCalculator');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should return 0 for empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

  test('should return the number itself for single number', () => {
    expect(calculator.add("1")).toBe(1);
    expect(calculator.add("2")).toBe(2);
    expect(calculator.add("12")).toBe(12);
  });
});