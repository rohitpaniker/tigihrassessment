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
    expect(calculator.add("1,2,3,4,5")).toBe(15);
    expect(calculator.add("2,4,6,8")).toBe(20);
    expect(calculator.add("10,20,30,40")).toBe(100);
  });
  
  test('should return total sum of all comma-separated and newline separated numbers provided as input', () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });
  
  test('should return total sum of all numbers separated by different delimiters provided as input', () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test('should throw exception for negative numbers', () => {
    // Single negative number - will PASS (GREEN phase)
    expect(() => calculator.add("-1")).toThrow("negative numbers not allowed -1");
    expect(() => calculator.add("1,-2")).toThrow("negative numbers not allowed -2");
    
    // Multiple negative numbers - show all in exception will PASS (GREEN PHASE)
    expect(() => calculator.add("-1,-2")).toThrow("negative numbers not allowed -1,-2");
    expect(() => calculator.add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
  });
});