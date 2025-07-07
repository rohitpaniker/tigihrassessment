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

  test('should return sum of two comma-separated numbers', () => {
    expect(calculator.add("1,5")).toBe(6);
    expect(calculator.add("2,3")).toBe(5);
    expect(calculator.add("10,20")).toBe(30);
  });
  
  test('should return total sum of all comma-separated numbers provided as input', () => {
    // This test will FAIL initially (RED phase): returns wrong value instead of total sum
    expect(calculator.add("1,2,3,4,5")).toBe(15);
    expect(calculator.add("2,4,6,8")).toBe(20);
    expect(calculator.add("10,20,30,40")).toBe(100);
  });
});