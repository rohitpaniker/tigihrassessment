
class StringCalculator {
  add(numbers) {
    // Test for empty input. 
    // Minimal implementation to make the test pass
    
    // REFACTORING user input for better readability.
    // This will extract clean numbers mixed in commas, newline or any special char delimiters
    const _numbers = (numbers.length === 0) ? numbers : numbers.match(/\d+/g).join()
    
    if (_numbers === "") {
      return 0;
    }

    // Handle single, comma, newline or any delimiter separated numbers using Regex
    if (_numbers.includes(",")) {
        const parts = _numbers.split(",");
        const addAll = parts.reduce((accumlator, currentValue) => accumlator = parseInt(accumlator) + parseInt(currentValue));
        return parseInt(addAll);
    }
    
    return parseInt(_numbers);
    // We'll add more logic later for other cases
  }
}

module.exports = StringCalculator;