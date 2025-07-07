
class StringCalculator {
    add(numbers) {
        // This will extract clean numbers mixed in commas, newline or any special char or delimiters
        const _numbers = this.extractCleanNumbers(numbers);

        if (_numbers === "") {
            return 0;
        }

        const numArray = _numbers.split(",");

        // Negative number check
        this.validateNoNegatives(numArray);

        // Process if no negative numbers
        // Handle single, comma, newline or any delimiter separated numbers using Regex
        if (_numbers.includes(",")) {
            const addAll = numArray.reduce((accumlator, currentValue) => accumlator = parseInt(accumlator) + parseInt(currentValue));
            return parseInt(addAll);
        }

        return parseInt(_numbers);
        
        // We can add more logic later for other cases
    }

    extractCleanNumbers(num) {
        return (num.length === 0) ? num : num.match(/-?\d+(\.\d+)?/g).join()
    }

    validateNoNegatives(numbersArray) {
        const negatives = numbersArray.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed ${negatives.join(',')}`)
        }
    }
}

module.exports = StringCalculator;