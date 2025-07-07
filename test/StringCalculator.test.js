const StringCalculator = require('../src/StringCalculator');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should return 0 for empty string', () => {
    // This test will FAIL initially (RED phase) since no StringCalculator.js file is created
    expect(calculator.add("")).toBe(0);
  });
});