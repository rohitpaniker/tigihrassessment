// Since this is the first simple case, there's not much to refactor yet.
// The code is already clean and simple. Refactoring will become more 
// important as we add more test cases and functionality.

class StringCalculator {
  add(numbers) {
    // Test for empty input. 
    // Minimal implementation to make the test pass
    
    if (numbers === "") {
      return 0;
    }

    // We'll add more logic later for other cases
  }
}

module.exports = StringCalculator;