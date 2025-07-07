// The code is already clean and simple. 
// Refactoring will become more 
// important as we add more test cases and functionality.

class StringCalculator {
  add(numbers) {
    // Test for empty input. 
    // Minimal implementation to make the test pass
    
    if (numbers === "") {
      return 0;
    }

    // Handle single, comma and newline separated numbers
    if (numbers.includes(",")) {
        const onlyNumbers = numbers.match(/\d+/g).join();
        const parts = onlyNumbers.split(",");
        const addAll = parts.reduce((accumlator, currentValue) => accumlator = parseInt(accumlator) + parseInt(currentValue));
        return parseInt(addAll);
    }
    return parseInt(numbers);
    // We'll add more logic later for other cases
  }
}

module.exports = StringCalculator;